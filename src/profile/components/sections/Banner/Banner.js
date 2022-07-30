import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profileImg from "../../../../assets/images/profileImg.jpg";
import "./Banner.css";

const Banner = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = ["Desarrollador Fullstack", "Diseñador Web", "Diseñador UX/UI"];
    const [ text, setText ] = useState("");
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenid@ a mi Portfolio</span>
                        <br />
                        <div className="title-container">
                            <h1>{`Contrátame como: `}<br /><span className="wrap">{text}</span></h1>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="button-container">
                            <button onClick={() => console.log("connect")}>Contáctame <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profileImg} alt="Foto de perfil" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
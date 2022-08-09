import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../../../assets/images/meter1.svg";
import meter2 from "../../../../assets/images/meter2.svg";
import meter3 from "../../../../assets/images/meter3.svg";
import colorSharp from "../../../../assets/images/color-sharp.png"
import logo1 from "../../../../assets/images/html.svg";
import logo2 from "../../../../assets/images/css.svg";
import logo3 from "../../../../assets/images/bootstrap.svg";
import logo4 from "../../../../assets/images/sass.svg";
import logo5 from "../../../../assets/images/javascript.svg";
import logo6 from "../../../../assets/images/react.svg";
import logo7 from "../../../../assets/images/nodejs.svg";
import logo8 from "../../../../assets/images/git.svg";
import "./Skills.css";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max:4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const responsive2 = {
        superLargeDesktop: {
            breakpoint: { max:4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Aptitudes</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={logo1} alt="imageasda" />
                                    <div className="cover" />
                                </div>
                                <div className="item">
                                    <img src={logo2} alt="Imageasd" />
                                    <div className="cover" />
                                </div>
                                <div className="item">
                                    <img src={logo3} alt="Imageasd" />
                                    <div className="cover" />
                                </div>
                                <div className="item">
                                    <img src={logo4} alt="Imageasd" />
                                    <div className="cover" />
                                </div>
                                <div className="item">
                                    <img src={logo5} alt="Imageasd" />
                                    <div className="cover" />
                                </div>
                                <div className="item">
                                    <img src={logo6} alt="Imageasd" />
                                    <div className="cover" />
                                </div>
                                <div className="item">
                                    <img src={logo7} alt="Imageasd" />
                                    <div className="cover" />
                                </div>
                                <div className="item">
                                    <img src={logo8} alt="Imageasd" />
                                    <div className="cover" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel responsive={responsive2} infinite={true}>
                            <div className="softSkill-bx">
                                <div className="features-bx">
                                    <h3 className="features-title">Random feature</h3>
                                    <img src={meter1} alt="Imageasd" />
                                </div>
                                <div className="features-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="softSkill-bx">
                                <div className="features-bx">
                                    <h3 className="features-title">Random feature</h3>
                                    <img src={meter2} alt="Imageasd" />
                                </div>
                                <div className="features-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="softSkill-bx">
                                <div className="features-bx">
                                    <h3 className="features-title">Random feature</h3>
                                    <img src={meter3} alt="Imageasd" />
                                </div>
                                <div className="features-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
}

export default Skills;
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../../../assets/images/contact-img.svg";
import Form from "../../pagesElements/Form";
import "./Contact.css";

const Contact = () => {

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contáctame" />
                    </Col>
                    <Col md={6}>
                        <h2>Contáctame</h2>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
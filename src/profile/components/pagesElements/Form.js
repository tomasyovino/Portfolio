import { useState  } from "react";
import { Col, Row } from "react-bootstrap";

const Form = () => {
    const formInitialDetails = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [ formDetails, setFormDetails ] = useState(formInitialDetails);
    const [ buttonText, setButtonText ] = useState("Enviar");
    const [ status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Enviando...");
        let response = await fetch("http://localhost:5000/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",

            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Enviar");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Mensaje enviado con éxito."});
        } else {
            setStatus({ success: false, message: "Algo falló en el envío. Por favor, intente de nuevo más tarde." });
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.name} placeholder="Nombre..." required onChange={(e) => onFormUpdate("name", e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="Email..." required onChange={(e) => onFormUpdate("email", e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.subject} placeholder="Asunto..." required onChange={(e) => onFormUpdate("subject", e.target.value)} />
                </Col>
                <Col size={12} className="px-1">
                    <textarea row="6" value={formDetails.message} placeholder="Mensaje..." autocomplete="off" required onChange={(e) => onFormUpdate("message", e.target.value)} />
                    <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                    status.message &&
                    <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
            </Row>
        </form>
    );
};

export default Form;
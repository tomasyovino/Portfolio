import "./Form.css";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

const Form = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ft2vqs2','template_9nisqrs', e.target, "9-rPHVl96wxLeD4MI")
            .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
                Swal.fire({
                    icon: "success",
                    title: "Mensaje enviado con éxito",
                });
            })
            .catch((err) => {
                console.log('FAILED...', err);
                Swal.fire({
                    icon: "error",
                    title: "¡Ups! Algo ha ido mal",
                    text: err.text,
                });
            });
        e.target.reset();
    };

    return(
        <form class="contact__form" onSubmit={handleOnSubmit}>
            <div>
                <input
                    className="short_input form_field"
                    type="text"
                    name="from_name"
                    placeholder="Nombre"
                    required
                />
                <input
                    className="short_input form_field" 
                    type="email"
                    name="from_mail"
                    placeholder="E-mail"
                    required
                />
            </div>
            <input
                className="form_field" 
                type="text"
                name="subject"
                placeholder="Asunto"
                required
            />
            <textarea
                className="form_field" 
                type="text"
                name="message"
                placeholder="Mensaje"
                required
                cols="30"
                rows="10"
            />
            <div className="form_buttons">
                <button type="reset">Reestablecer</button>
                <button type="submit">Enviar</button>
            </div>
        </form>
    );
}

export default Form;
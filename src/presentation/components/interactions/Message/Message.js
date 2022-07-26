import "./Message.css";

const Message = () => {

    return(
        <div className="message">
            <h3>¡Déjame tu mensaje!</h3>
            <p>¿No te gustan los formularios? Envíame un
                <a target="_blank" href="mailto:tomasyovino@gmail.com" rel="nofollow noreferrer noopener" className="link message_a">correo</a>
            </p>
        </div>
    );
}

export default Message;
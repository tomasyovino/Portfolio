import { Instagram, LinkedIn, WhatsApp, Email } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
    return(
        <div id="Footer">
            <div>
                <div>
                    <div>
                        <Instagram />
                        <span>@tomasyovino</span>
                    </div>
                    <div>
                        <LinkedIn />
                        <span>Tomás Yovino</span>
                    </div>
                </div>
                <div>
                    <div>
                        <WhatsApp />
                        <span>+54 11 3911-2892</span>
                    </div>
                    <div>
                        <Email />
                        <span>tomasyovino@gmail.com</span>
                    </div>
                </div>
            </div>
            <span id="CopyrightSign">© 2022 Tomás Yovino</span>
        </div>
    );
}

export default Footer;
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = 5000;

// server use to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.REACT_APP_EMAIL_USER,
        pass: process.env.REACT_APP_EMAIL_PASS
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    };
});

router.post("/send", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "tomasyovino@gmail.com",
        subject: subject,
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Mensaje enviado" });
      }
    });
});
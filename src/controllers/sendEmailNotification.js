const nodemailer = require("nodemailer");
const {NODEMAILER_ACCOUNT_PASSWORD, NODEMAILER_ACCOUNT} = process.env;

const sendEmailNotification = async (emailAddress, message, subject) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `${NODEMAILER_ACCOUNT}`,
                pass: `${NODEMAILER_ACCOUNT_PASSWORD}`
            }
        });

        const mailConfig = {
            from: "",
            to: emailAddress,
            subject: subject,
            text: message
        };

        const info = await transporter.sendMail(mailConfig);
        console.log("Email sent: " + info.response);

    } catch (error) {
        console.error(error.message);
        throw new Error("Could not send email");
    }
};
module.exports = {sendEmailNotification};
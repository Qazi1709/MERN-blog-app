import nodemailer from 'nodemailer';
import config from '../config/default.json';


async function sendEmail(email, verificationToken) {
    try {
        let transporter = nodemailer.createTransport({
            host: config.SEND_EMAIL.HOST,
            port: config.SEND_EMAIL.PORT,
            auth: {
                user: config.SEND_EMAIL.AUTH.USER,
                pass: config.SEND_EMAIL.AUTH.PASSWORD
            }
        });

        const verificationLink = `http://172.26.248.114:6001/api/admin/verify-email?token=${verificationToken}`;

        let info = await transporter.sendMail({
            from: 'Blogs <hi@qazihassan.com>',
            to: email,
            subject: 'User Registered Successfully',
            html: `<h1>Verify Your Email</h1><p>Click the following link to verify your email: <a href ="${verificationLink}">Verify Email</a></p>`
        });

        console.log(`Message Sent to: %s`, info.messageId);
    } catch (error) {
        console.error(error);
        return { status: false };
    }
}

export default sendEmail; // Remove parentheses here
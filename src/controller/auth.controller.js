const { sendEmail } = require("../helper/mailer");
const { verifyToken } = require("../helper/verifyToken");


const auth = async (req, res) => {
    const { email, token } = req.body;
    
    // Verify Auth0 Token
    const verifiedToken = await verifyToken(token);

    if (!verifiedToken) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    try {
        await sendEmail(email, token);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
    }
}

module.exports = {auth}
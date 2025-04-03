
const axios = require('axios');



const verifyToken = async (token) => {
    const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;  
    
    try {
        const options = {
            method: 'get',
            url: AUTH0_DOMAIN,
            headers: {authorization: 'Bearer ' + token},
            };

            const data = await axios.request(options)

            return data.data
    }
    catch (err) {
        console.error('Token verification error:', err);
        return false; 
    }
};

module.exports = { verifyToken };
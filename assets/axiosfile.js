const axios = require('axios');

const axiosCall = {
    async getUser(dataUser) {
        try { let response = await axios
        .get(`https://api.github.com/users/${dataUser.username}`);
        return response.data;
    } catch (err) {
        console.log(err)
    }
}};

module.exports = axiosCall;
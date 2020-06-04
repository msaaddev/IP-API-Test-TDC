// importing axios
const axios = require('axios');

(() => {
    axios
        .get(
            'http://api.ipapi.com/182.185.176.244?access_key=ACCESS_TOKEN_HERE&format=1'
        )
        .then(({ data }) => console.log(data).catch((err) => console.log(err)));
})();

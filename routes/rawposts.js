var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET posts from fake json server. */
router.get('/', async function (req, res, next) {
    await axios.get('https://jsonplaceholder.typicode.com/posts/', {
        params: {
            userId: 5
        }
    }).then(function (response) {
        console.log("Incoming Posts = ", response.data);
        var data = {
            posts: response.data
        }
        res.json(data);
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        // always executed
        console.log("Finally block called");
    });
});

module.exports = router;

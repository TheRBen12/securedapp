const express = require('express');
const cors = require('cors');
const whitelist = ['https://example.com', 'https://www.example.com'];
const loginFailures = require('./authenticationHandler')
const router = require('./controller')

const app = express();

const corsOptions = {
    origin: function (request, response, origin, next) {
        if (whitelist.indexOf(origin) !== -1) {
            next()
        } else {
            loginFailures.originNotAllowed(request, response)
        }
    },
}

app.use(cors(corsOptions));
app.get('/examples', (request, response) => {
    res.json({ msg: 'Hello World mit CORS' })
})
app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:8080`)
})

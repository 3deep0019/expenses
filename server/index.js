const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('../db/connection')
const jwt = require('jsonwebtoken');

connectDB()
const app = express()
const port = process.env.PORT || 2000

app.get('/', (req, res) => res.send('Hello World'))
app.get('/tokenString',(req,res)=>{
    res.send(_tokenGenerator())
})
const _tokenGenerator = () => {
    const accessToken = {
        ExpiresAt: Date.now() + 15 * 24 * 60 * 60 * 1000,
        Type: 'Application',
    };
    accessToken.TokenString = jwt.sign(accessToken, 'MDA3IDAwNyAwMDcgMDA3', {
        algorithm: 'HS256',
    });
    return accessToken;
};


app.listen(port)
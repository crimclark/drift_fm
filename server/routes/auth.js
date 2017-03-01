const express = require('express');
const request = require('request');
const router = express.Router();



const client_id = process.env.GOOGLE_CLIENT_ID;
const client_secret = process.env.GOOGLE_CLIENT_SECRET;
const redirect_uri = 'http://127.0.0.1:3001/auth/callback';

router.get('/login', (req, res, next) => {
  const url = 'https://accounts.google.com/o/oauth2/v2/auth';
  const queryParams = `response_type=code&client_id=${client_id}&scope=profile&state=abc&redirect_uri=${redirect_uri}`;
  res.redirect(url + '?' + queryParams);
})

router.get('/callback', (req, res, next) => {
  const {code, state} = req.query;
  const url = 'https://www.googleapis.com/oauth2/v4/token';
  const form = {
    code,
    client_id,
    client_secret,
    redirect_uri,
    grant_type: 'authorization_code'
  }
  request.post(url, {form}, (err, resp, body) => {
    const data = JSON.parse(body);
    req.session.access_token = data.access_token;
    res.redirect('/profile/me');
  });
});

module.exports = router;

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDZiZWYyY2IzZWViZDlmMjgzZmYyNDkxZTA1OGY1YWEzZjY5NzA3NTdhYTlmNjQxZGM0NzdhMmY2YTk0MzdmMTdhZWZhODI4YjkxZDlmMGMiLCJpYXQiOjE2NTM5NjI3NTMuNzYzMTUzLCJuYmYiOjE2NTM5NjI3NTMuNzYzMTU1LCJleHAiOjE2ODU0OTg3NTMuNzI0NjYyLCJzdWIiOiJVU0VSLTAwMDAzIiwic2NvcGVzIjpbXX0.ab6BJY64hhB0WrSp7s_kd7RT0cLaqRjpaYzk3kNCOjtuAVfoYZMM1rJEmju9tm8x_EdFDl4DG6Kup0EVrf4jGFe4ai2ZOj21RGlJSwCgJ4WWjVPd0orUfjCaqyEijTL1daFusjc5DTJo2wW_o0r_DlTTVsn_D1WCyRdi66d8pEQ7Vot0VUvc0jzWcP0TiEYhbwx_o464b04XtXiqv8LUoX4mExrFQK1KWu2xWY0_ltN4EHCsXJBxocq-hhzbozhTKLGtsrsjacfWKqBGY0JbKKVRAla5v7jmWkNariywlHxdvHMNY9Jf_5aqRugKMQQySksKJb_NfqjS3-QQDsqE5-HEewrHuZPKDdSfi5CtuRLX46nprtIUDvOrGeRWuuAZLQagSGGbE742Hq0vXqm2jV5XBf7ymy1KcnF4uMWb8VvXwvDhue5xp52sr-uioIZCbsk8E7q8XQixq_ZHVgnBdiUPMeSbxBbKX6QoxkMiEzQlzwzlq7cWWcxNSp8Q6yam4WTNMtfqz0o2N41xjtCmCgsNtI7DgOBG7bHX9U4yLqvXjz1_es_mXK8-T6MuO0doaZU9fVY80Uu90_eSBY9NSmbjbol9vAWrE_j7xH9tBK4bBl2KWmG4u2hguKoNaeaeH5y2e9CwQ81wA1PUQPEo0ij1YXjPxFTymNgwDRflvh0'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
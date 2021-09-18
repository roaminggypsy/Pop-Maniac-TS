import express from 'express';
import path from 'path';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', "..", "front", 'build');
app.use(express.static(buildPath));

app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));
import express from 'express';
import path from 'path';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('front/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'));
  });
}

app.listen(PORT,() => console.log(`hosting @${PORT}`));
var express = require('express');

const app = express();
const port = 3000;
app.enable('trust proxy');
app.use(express.urlencoded({extended:true}));
//headers['x-forwarded-for']
app.get('/',(req,res)=>{
    let userIp = req.ip || req.socket.remoteAddress; 
    res.send(`Your IPv4 address is ${userIp} `);
    
});

app.listen(port,()=>{
    console.log(`run http://localhost:${port} `);
});

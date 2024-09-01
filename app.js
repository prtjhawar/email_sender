const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const port = 8080


app.get('/', (req, res) => {
    res.send("mail is sucessfully run");

})

app.get("/mail", async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
          //connect smtp server  
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        
        auth: {
            user: 'dejuan39@ethereal.email',
            pass: 'WNYfxVT7PAHq19Wdcj'
        }

    })



        let info = await transporter.sendMail({
            from: "dejuan39@ethereal.email", // sender address
            to: "izaiah.bergnaum92@ethereal.email", // list of receivers
            subject: "Hello niki", // Subject line
            text: "Hello niki", // plain text body
            html: "<b>Hello niki</b>", 
            
        })
        console.log("message sent",info);
        res.json(info)
        

})




app.listen(port, () => {
    console.log(`app is listinig at ${port}`);

})
const express =require("express")
const cors = require("cors")

const app =express()

app.use(express.json())

//Install NodeMailer
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:"nanthiniprema48@gmail.com",
        pass:"yhft vunf ksln gxlv",
    },
});



app.get("/sendmail",function(req,res)
{
    transporter.sendMail(
        {
            from:"nanthiniprema48@gamil.com",
            to:"xomodag963@anypng.com",
            subject:"A message from Bulk Mail App",
            text:"Hi,hello"
    },
    function(error,info){
        if(error)
        {
            console.log(error)
            res.send("Error")
        }
        else{
            console.log(info);
            res.send("Success")
        }
    
    }
    )

})


app.listen(3000,function(){
    console.log("Server Started....")
})
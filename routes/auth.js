const router = require('express').Router();
const nodemailer=require('nodemailer')
const  User = require('./../User.js');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
// const {
//     getMaxListeners
// } = require('./../User.js');
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ezymail.mailer@gmail.com',
        pass:'bhandari',
    }
});
router.post('/register', async (req, res) => {
    
    const emailExist = await User.findOne({
        email: req.body.email
    });
    if (emailExist) return res.status(400).send('Email exist');
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({

        name: req.body.name,
        email: req.body.email,
        password: hashPassword,

    });
    try {
         const savedUser = await user.save();
        console.log('a')
        var link="https://ezymailserver.herokuapp.com/verify/" + savedUser._id;
        console.log('aa')
        var mailoptions={
            from:"ezymail.mailer@gmail.com",
            to:user.email,
            cc:"vermakunal088@gmail.com",
            subject:'',
            html:"<a href="+link+">Click here to verify</a>",
        } 
        // console.log('aaa')
        transporter.sendMail(mailoptions,function(error,info){
            if(error){
                console.log(error);
            }else{
                console.log("Email sent"+info.response);
            }
        });
        res.send(user)

    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
router.get('/verify/:id',async(req,res)=>{
   
    const user = await User.findById(req.params.id);
    user.isverified = true;
    await User.findOneAndUpdate({_id:req.params.id},user);
    return res.redirect("https://ezy-mail.netlify.app/login")

});
router.post("/addlist", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).send("Server Error");
    }
    const now=Date.now();
    user.emailList.push({
      userId: user._id,
      to: req.body.to,
      cc: req.body.cc,
      subject: req.body.subject,
      schedule: req.body.schedule,
      content: req.body.content,
      time:now,
    });
    await User.findOneAndUpdate({ email: req.body.email }, user);
    return res.json({ user });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
router.get("/history/:email",async (req,res) =>{
    try{
      const user = await User.findOne({email:req.params.email});
      if(!user)
      {
        return res.status(500).send("Server error");
  
      }
      return res.status(200).json(user.emailList);
    }
    catch(err)
    {
      console.log(err);
      return res.status(400).send(err);
    }
  });
router.post('/Osignup',async (req,res)=>{ 
    try{
		const user=new User({email:req.body.email,password:req.body.password,level:req.body.level,username:req.body.username});
		await user.save();
		res.send({level:req.body.level,username:req.body.username,email:user.email});
	}catch(err){
		return res.status(422).send(err.message); 
	}
});
router.post('/Osignin',async (req,res)=>{
	const {email}=req.body;
	if (!email)
		return res.status(422).send({error: 'Must provide an email '});
	const user=await User.findOne({email});
	if (!user)
		return res.status(422).send({error:"Invalid email or password"});
	try{
		res.send({level:user.level,username:user.username,email:user.email});
	}catch(err){
		return res.status(422).send({error:"Invalid email or password"});
    }
});
router.post('/signin',async (req,res)=>{
	const {email,password}=req.body;
	if (!email || !password )
		return res.status(422).send({error: 'Must provide an email or password '});
	const user=await User.findOne({email});
  
	if (!user){
   
		return res.status(422).send({error:"Invalid email or password"});
  }
	try{
		const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({
        error: 'Invalid Password'

    });
    
		const token=jwt.sign({ userId:user._id},"skasfnsdnfoinqwinfocion");
		res.send({token,level:user.level,username:user.username,email:user.email});
	}catch(err){
    return  res.status(422).send({error:"Invalid email or password"});
  }
});
module.exports = router;

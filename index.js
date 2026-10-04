const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const Chat = require('./models/chats.js');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

const chats = [
{
  from:"neha",
  msg:"when is the lab exam",
  to:"priti",
  created_at: new Date(),
},
{
  from:"simran",
  msg:"How are you?",
  to:"manita",
  created_at: new Date(),
},
{
  from:"raju",
  msg:"when are u coming?",
  to:"ansh",
  created_at: new Date(),
},
{
  from:"rohit",
  msg:"seend me the notes",
  to:"purohit",
  created_at: new Date(),
},
{
  from:"arya",
  msg:"ur college finished??",
  to:"mahi",
  created_at: new Date(),
}
];

app.get("/chats", async (req,res) =>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
})

app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
});

app.post("/chats",async(req,res)=>{
  try{
    let {from, msg,to} = req.body;
  let newChat = new Chat( {
    from: from,
    msg : msg,
    to : to,
    created_at: new Date()
  });
  await newChat.save()
   res.redirect("/chats");
}
catch(err) {console.log(err)};
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async(req,res) =>{
  let{id} = req.params;
  let chat = await Chat.findById(id);
  res.render('edit.ejs',{ chat });
});

app.put("chats/:id",async(req,res)=>{
  let {id}=req.params;
  let {msg: newMsg} = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(id,{msg: newMsg},{runValidators:true , new:true});
  console.log(updatedChat);
  res.redirect("/chats");
});
app.delete("/chats/:id", async(req,res) =>{
  let{id} = req.params;
  let Delchat = await Chat.findByIdAndDelete(id);
  console.log(Delchat);
  res.redirect("/chats");
});
app.get("/",(req,res) =>{
  res.send("root is working");
});

app.listen(8080,() => {
  console.log("server is running on port 8080")
});
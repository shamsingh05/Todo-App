const express = require("express");
const app = express();
const todoRoutes = require("./routes/todo.routes");
app.use(express.json());
app.use("/api/todos",todoRoutes);
const session = require("express-session");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/set-cookie",(req,res)=>{
    res.cookie("name", "user-1");
    res.send("Cookie set");
})

app.get("/get-cookie",(req,res)=>{
    res.json(req.cookies);
})

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized:true,
}))
app.use("/api/todos", todoRoutes);

app.post("/login", (req, res)=>{
    const {username} = req.body;
    req.session.user=username;
    res.send("user loggedin");
})

app.get("/profile", (req, res)=>{
    if(!req.session.user){
        return res.status(401).send("User not logged in");
    }
    res.send(`Welcome ${req.session.user}`);
})
app.get("/logout", (req, res)=>{
    app.session.destroy();
    return res.send("user logged out");
})
module.exports = app;
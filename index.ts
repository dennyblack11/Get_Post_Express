import express, { Application, Request,Response } from "express";

const port:number = 2000;

const app: Application = express()

app.use(express.json());


const db = [
    {
        id: 1,
        name: "Denny",
        email: "denny@gmail.com",
    },
    {
        id: 2,
        name: "Kenny",
        email: "kenny@gmail.com",
    },
    {
        id: 3,
        name: "Danny",
        email: "danny@gmail.com",
    },
    {
        id: 4,
        name: "Zaddy",
        email: "zaddy@gmail.com",
    },
]

//Default get

app.get("/", (req:Request, res:Response) => {
    res.send("My first express server")
})

//Get
app.get("/get-all", (req:Request, res:Response) => {
    res.send(db)
})

//Post
app.post("/add", (req:Request, res:Response) => {

    let newUser = req.body;

    db.push(newUser);
    res.send(db)
})

app.listen(port, () => {
    console.log("")
    console.log("Server is listening to port");
});







const express = require("express");
const exphbs = require("express-handlebars");
const homeRouts = require("./routes/home");
const cardRouts = require("./routes/card");
const addRouts = require("./routes/add");
const coursesRouts = require("./routes/courses");
const path = require("path");
const mongoose = require("mongoose");


const app = express();

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
});


app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public"))); // регистрация роутеров
app.use(express.urlencoded({extended: true})); // обработка данных POST метод
app.use("/", homeRouts);
app.use("/card", cardRouts);
app.use("/add", addRouts);
app.use("/courses", coursesRouts);

const PORT = process.env.PORT || 3000;

//const password = `aKXL9epgbeUWRX14`;


const connectDB = async () => {
    try {
        const url = "mongodb+srv://sergey:eRRC850rUb3IF4pA@cluster0-gcnir.mongodb.net/test?retryWrites=true&w=majority";
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log("MongoDB Conected");
        });

    } catch (err) {

    }
};


connectDB();





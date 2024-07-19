require('dotenv').config();

const express = require('express');
const cors = require('cors');
const blogRoutes = require("./routes/blog_routes");
const connectDB = require("./utils/db");

const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
    origin: "*", // Allow requests from any origin
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true
};


app.use(cors(corsOptions));
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Testing api");
});

app.use("/v1/api/blog", blogRoutes);


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });

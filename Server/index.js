//importingexpress
const express = require("express");
const app = express();
//importingdotenv
const dotenv = require("dotenv");
//importingmongoose
const mongoose = require("mongoose");
dotenv.config();

const menuRoutes = require("./Routers/menuRoutes");
const contactRoutes = require("./Routers/contactRoutes");
const cafeInfoRoutes = require("./Routers/cafeInfoRoutes");
const galleryRoutes = require("./Routers/galleryRoutes");

// Parse JSON
app.use(express.json());



//gettheenvinformatins
const port = process.env.port;
const conectingstring=process.env.conectingstring



// Make uploads folder public
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
mongoose
  .connect(process.env.conectingstring)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/menu", menuRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/cafe-info",cafeInfoRoutes);



app.use( "/api/gallery", galleryRoutes);


app.get("/", (req, res) => {
  res.send("Server is working");
});


process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:");
  console.error(err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:");
  console.error(err);
});


//callingtheserver
app.listen(port, () => console.log(`Server running on port ${port}`));


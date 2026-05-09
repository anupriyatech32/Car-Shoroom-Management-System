const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bookings = [];

app.post("/booking", (req, res) => {

    const data = req.body;

    bookings.push(data);

    res.json({
        message: "Booking Submitted Successfully",
        booking: data
    });

});

app.get("/bookings", (req, res) => {

    res.json(bookings);

});

app.listen(5000, () => {

    console.log("Server running on port 5000");

});
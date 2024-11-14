// Import modules
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up MariaDB connection
const db = mysql.createConnection({
    host: 'aws-2-database.c32yg6440a81.ap-south-1.rds.amazonaws.com', // AWS RDS endpoint for MariaDB
    user: 'Divyanshu',
    password: 'Divyanshu258',
    database: 'Aws_db2',
    port: 3306 // Default MariaDB port
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MariaDB:", err);
        return;
    }
    console.log("Connected to MariaDB successfully!");
});

// Define the /submit endpoint to handle form submissions
app.post("/submit", (req, res) => {
    const { myname, email, subject, message } = req.body;

    // Insert form data into customerDetails table
    const query = "INSERT INTO customerDetails (name, email, subject, message) VALUES (?, ?, ?, ?)";
    db.query(query, [myname, email, subject, message], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Error submitting data.");
        } else {
            res.status(200).send("Data submitted successfully!");
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


// ROUTES ============================================
app.get("/test", (req, res) => {
    res.json({message: "Hello World!"});
})


// LISTENER ==========================================
app.listen(PORT, () => {
    console.log("Server is listening.");
})
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// BOOTLEG LOOKIN-ASS DATABASE FOR NOW ===============
let db = [
    {
        listName: "hold up a sec",
        todos: ["Wake up", "Take a dump", "Get out of bed"]
    },
    {
        listName: "Test1",
        todos: ["no u", "no u", "Uno reverse card"]
    },
    {
        listName: "Test2",
        todos: ["hehe lol", "Get Shrekt", "absolute Shrekage", "I need sleep"]
    },
    {
        listName: "end of the day",
        todos: ["there is no end", "mwahahaha", "(eat sadness, kid)"]
    },
]


// ROUTES ============================================
app.get("/get-todos", (req, res) => {
    res.json(db);
})


// LISTENER ==========================================
app.listen(PORT, () => {
    console.log("Server is listening.");
})
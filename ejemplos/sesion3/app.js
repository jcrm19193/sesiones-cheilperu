const Express = require('express')
const App = Express()
App.get("/", (req, res) => {
    res.send("hello world 4")
});

App.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`process listen at port ${process.env.PORT}`)
})
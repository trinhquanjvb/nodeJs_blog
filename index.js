const express = require('express') // nạp thư viện express
const app = express() // gán
const port = 3000 // cổng

// get là router
app.get('/Home', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`${port}`)
})

// gio lam sao de day len

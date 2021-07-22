const express = require('express')

const app = express()


const PORT = process.env.PORT || 3000


app.use(express.json())

app.get('/', (req, res) => {

	res.send('app running jenkins pm2 ok!!!!!!!!')

})



app.listen(PORT, console.log(`server upon port ${PORT}`))

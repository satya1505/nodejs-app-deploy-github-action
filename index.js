import express from 'express';

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res)=> {
    return res.json(({meg: 'Hello from the server now doing the changess'}))
})

app.listen(PORT, () => {
    console.log(`Server is running on Posrt`)
})
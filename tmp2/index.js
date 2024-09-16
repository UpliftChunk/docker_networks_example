const express = require('express');
const app= express();
const cors= require('cors');

app.use(cors());
app.get('/', async (req, res)=>{
	res.send(`Hi, i am from second oontainer running of my own port at ${process.env.LOCAL_PORT}`);
});
app.listen(process.env.LOCAL_PORT || 5000,()=>console.log(`Server running at http://localhost:${process.env.LOCAL_PORT}`))

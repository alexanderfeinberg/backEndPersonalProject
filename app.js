require('dotenv').config()
const express = require('express');
const { User, Campaign } = require('./db/models')
const app = express()

app.use(express.json())


app.get('/users/:userId/campaigns', async(req, res)=>{
    const campaigns = await User.findOne({
        where:{
            id:req.params.userId
        },
        include:{
            model: Campaign
        }
    })

    // const campaigns = await User.findByPk(req.params.userId)
    console.log(campaigns)

    res.json(campaigns)
})

app.listen(5001, ()=>console.log('Server is listening on port ',5001))

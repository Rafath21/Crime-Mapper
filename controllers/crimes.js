const Crime = require('../models/Crime');

exports.getCrimes=async(req,res,next)=>{
    try{
        const crimes=await Crime.find();
        return res.status(200).json({
            success:true,
            count:crimes.length,
            data:crimes,
        })
    }catch(err){
        console.error(err);
        res.status(500).json({ error:'Server error' });
    }
};

exports.addCrime=async(req,res,next)=>{
    try{
        const crime=await Crime.create(req.body);
        return res.status(201).json({
            success:true,
            data:crime
        })
    }catch(err){
        console.error(err);
       if(err.code===11000){
            return res.status(400).json({error:'This city already exists'})
        }
        res.status(500).json({ error:'Server error' });
    }
};
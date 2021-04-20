const express=require('express');
const {getCrimes,addCrime}=require('../controllers/crimes');
const router=express.Router();

router
       .route('/')
       .get(getCrimes)
       .post(addCrime);


 module.exports = router;
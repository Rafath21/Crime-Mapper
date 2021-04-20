const mongoose=require('mongoose');
const CrimeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    location: {
      type:{
          type: String,
           enum: ['Point']
        },
      coordinates: {
      type: Array,
    },
      },
      createdAt:{
      type:Date,
      default:Date.now
  }, 
  murders:{type:String},
  kidnapping:{type:String},
  rapes:{type:String},
  hurtCases:{type:String},
  Riotings:{type:String},
  Thefts:{type:String}
});

module.exports=mongoose.model('Crime',CrimeSchema);



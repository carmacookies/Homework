import mongoose from 'mongoose';

const CatsSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },
    age: {
        type:String,
        required:true
    }, 
    color: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:false
    }
})

const CatsModel = mongoose.model('Cats',CatsSchema);

export default CatsModel;

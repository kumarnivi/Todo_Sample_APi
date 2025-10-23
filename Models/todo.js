import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
    title:{type:String, required:true},
    completed:{type:Boolean, default:false},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

export default mongoose.model('Todo', todosSchema);
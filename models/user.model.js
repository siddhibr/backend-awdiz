import{model,Schema} from"mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: {type:String, required:true},
})

const User = model("User",userSchema);

// const newUser = new User({
//     name:"siddhi",
//     email:"siddhi@123",
//     password:"siddhi123",
// })

export default User;
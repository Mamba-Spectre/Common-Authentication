import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type:String,required:true},
    email:{type:String,required:true},
    authentication:{
        password:{type:String,required:true, select:false},
        salt:{type:String,select:false},
        sessionToken:{type:String,select:false},
    },
});

export const UserModal = mongoose.model('User',UserSchema);


export const getUsers = () =>{
    UserModal.find();
}
export const getUserByEmail = (email: String) =>{
    return UserModal.findOne({email});
}
export const getUserById = (id:string) => {
    UserModal.findById(id);
}
export const getUserBySessionToken = (sessionToken: string)=>{
    UserModal.findOne({
        'authentication.sessionToken':sessionToken
    })
}
export const createUser = (values: Record<string,any>) => {
    new UserModal(values);
}
export const deleteUsetById = (id:string) => {
    UserModal.findOneAndDelete({_id:id});
}
export const updateUserById = (id:string, values: Record<string,any>) => {
    UserModal.findByIdAndUpdate(id,values)
;}

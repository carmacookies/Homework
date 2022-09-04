import UserModel, { UserValidation } from "../model/userModel";

export async function handleLogin(req:any, res:any){ 
    try {
      const { email, password } = req.body;
      const { error } = UserValidation.validate({ email, password });
      if (error) throw error;
  
      const user = await UserModel.findOne({ email, password });
      if (!user) {
        res.send({login:false});
      }else{
        res.status(200).send({login:true, user});
        console.log('Just logged in', user);
    }
      
  
      
      }catch (error) {
            console.error(error);
            res.status(500).send({ login:false, error: "login failed" }) 
    }
  };
  
  export const handleRegister = async (req:any, res:any) => {
    try {
      const { email, password } = req.body;
      const { error } = UserValidation.validate({ email, password });
      if (error) throw error;
  
      const user = new UserModel({ email, password });
      const userDB = await user.save();
  
      res.status(200).send({ success: true, result:userDB });
      
  
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Register faild" });
    }
  };
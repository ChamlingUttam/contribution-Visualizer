import  {Request,Response} from 'express'
import { getUserProfile, getUserRepo } from '../services/services'
export const gitHubData = async (req:Request,res:Response)=>{
    const {username } = req.params 
 
    try {
        if(!username || typeof username !== 'string'){
            return res.status(400).json({message:"Invalid username"})
        }
        const userRepo = await getUserRepo(username)
        const userProfile = await getUserProfile(username)
        
        res.json({userProfile,userRepo})
    } catch (error:any) {
        res.status(500).json({message:`${error.message}`})
        
    }

}
import User from "../model/User.js"
export const createUser = async (req, res) => {
    try {
        let result = await User.create({
            ...req.body
        })
        res.status(200).json(result)
    } catch (error) {
        
    }
    
}

export const getUsers = async (req, res) => {
    try {
        let result = await User.find({}).sort({createdAt:-1})
        res.status(200).json(result)
    } catch (error) {
        
    }

}
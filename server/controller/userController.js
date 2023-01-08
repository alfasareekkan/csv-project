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
export const insertManyUsers = async(req, res) => {
    try {
        console.log(req.body);
        let result = await User.insertMany(req.body.data)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}
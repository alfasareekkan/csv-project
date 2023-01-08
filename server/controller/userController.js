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
        let result = await User.find({recordStatus:0}).sort({createdAt:-1})
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

export const deleteUser =async (req, res) => {
    try {
        console.log(req.params.id);
        let data =await User.updateOne({_id: req.params.id }, { $set: { recordStatus: 2 } })
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        
    }
}
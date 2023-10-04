import User from "../model/user-schema.js";


export const getUser = async (request, response) => {
    try {
        const user = await User.find({});

        response.status(200).json(user);
    }catch (error) {
        response.status(500).json({message: error.message});
    }
}
import Delivery from "../model/delivery-schema.js";


export const getDelivery = async (request, response) => {
    try {
        const delivery = await Delivery.find({});

        response.status(200).json(delivery);
    }catch (error) {
        response.status(500).json({message: error.message});
    }
}
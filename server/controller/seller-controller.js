import Seller from "../model/seller-schema.js";


export const sellerSignUp = async (request, response) => {
    try {
        const exist = await Seller.findOne({ sellername: request.body.sellername });
        if(exist) {
            return response.status(401).json({ message: 'seller already exist'});
        }
        const seller = request.body;
        const newSeller = new Seller(seller);
        await newSeller.save();
        response.status(200).json({ message: seller });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
export const sellerLogIn = async (request, response) => {
    try {
        const sellername = request.body.sellername;
        const password = request.body.password;
        let seller = await Seller.findOne({ sellername: sellername, password:password });
        if(seller) {
            return response.status(200).json({data:seller});
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}
export const editSeller = async (request, response) => {
    try {
      const sellerId = request.params.id; 
      
      const existingSeller = await Seller.findOne({ id: sellerId });
      
      if (!existingSeller) {
        return response.status(404).json({ message: 'Seller not found' });
      }
  
      const editedSellerData = request.body;

      Object.assign(existingSeller, editedSellerData);
  
      await existingSeller.save();
  
      response.status(200).json({ message: 'Seller updated successfully', seller: existingSeller });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

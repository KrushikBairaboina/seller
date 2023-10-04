import { products } from "./constants/data.js";
import { delivery } from "./constants/delivery.js";
import { orders } from "./constants/orderData.js";
import Delivery from "./model/delivery-schema.js";
import Orders from "./model/order-schema.js";
import Product from "./model/product-schema.js";
const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        await Orders.insertMany(orders);
        await Delivery.insertMany(delivery);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}
export default DefaultData;
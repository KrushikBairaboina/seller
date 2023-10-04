import { Dialog,styled,Box, TextField, Button } from "@mui/material"
import { useState } from "react";
import { addProduct } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
    align-self: flex-start;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;


const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
justify-content: center;
color: #fff;
height: 48px;
align-items: center;
border-radius: 2px;
width:30%;
`;
const AddProduct = ({open,setOpen}) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
      id: '',
      url: '',
      detailUrl: '',
      title: {
        shortTitle: '',
        longTitle: ''
      },
      price: {
        mrp: 0,
        cost: 0,
        discount: ''
      },
      quantity: 0,
      description: '',
      sale: '', 
      tagline: '' 
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
      console.log(e)
    };
  
    const handleTitleChange = (e) => {
      const { name, value } = e.target;
      setProduct({
        ...product,
        title: {
          ...product.title,
          [name]: value
        }
      });
    };
  
    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setProduct({
          ...product,
          price: {
            ...product.price,
            [name]: value
          }
        });
      };
      
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addProduct(product));
      navigate('/');
    };
    const handleClose = () => {
        setOpen(false);
    
    }

    return(
        <Dialog open={open} onClose={handleClose}  >
            {
                <Wrapper style={{ marginLeft: 5 }}>
                <TextField variant="standard" name="id" value={product.id} onChange={handleChange} label='Enter Product id'/>
                <TextField variant="standard" name="url" value={product.url} onChange={handleChange}label='Enter Product url'/>
                <TextField variant="standard" name="detailUrl" value={product.detailUrl} onChange={handleChange} label='Enter Product detailUrl'/>
                <TextField variant="standard" name="shortTitle" value={product.title.shortTitle} onChange={handleTitleChange} label='Enter Product shortTitle'/>
                <TextField variant="standard" name="longTitle" value={product.title.longTitle} onChange={handleTitleChange}label='Enter Product longTitle'/>
                <TextField variant="standard" name="mrp" value={product.price.mrp} onChange={handlePriceChange} label='Enter Product mrp'/>
                <TextField variant="standard" name="cost" value={product.price.cost} onChange={handlePriceChange}label='Enter Product cost'/>
                <TextField variant="standard" name="discount" value={product.price.discount} onChange={handlePriceChange}label='Enter Product discount'/>
                <TextField variant="standard" name="quantity" value={product.quantity} onChange={handleChange}label='Enter Product quantity'/>
                <TextField variant="standard" name="description" value={product.description} onChange={handleChange} label='Enter Product description'/>
                <TextField variant="standard" name="sale" value={product.sale} onChange={handleChange}label='Enter Product sale'/>
                <TextField variant="standard" name="tagline" value={product.tagline} onChange={handleChange}label='Enter Product tagline'/>
                <LoginButton style={{ marginLeft: '20%' }} onClick={handleSubmit}>Add NEW PRODUCT</LoginButton>
                </Wrapper>  
            }

        </Dialog>
    )
} 
export default AddProduct;
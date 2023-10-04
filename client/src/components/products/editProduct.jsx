import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editProduct } from '../../redux/actions/productActions';
import { Button, Container, Paper, TextField, Typography,styled } from '@mui/material';
const EditProductContainer = styled(Container)`
  margin-top: 70px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const EditProductHeader = styled(Typography)`
  margin-bottom: 20px;
`;

const EditProductForm = styled('form')`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 20px;
  }
`;

const EditProductInput = styled(TextField)`
  margin-bottom: 10px;
`;

const EditProductButton = styled(Button)`
  align-self: flex-start;
`;

const EditProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    url: '',
    detailUrl: '',
    title: {
      shortTitle: '',
      longTitle: '',
    },
    price: {
      mrp: 0,
      cost: 0,
      discount: '',
    },
    quantity: 0,
    description: '',
    sale: '',
    tagline: '',
  });

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    const product = products.find((product) => product.id === productId);

    if (product) {
      setFormData(product);
    }
  }, [productId, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    
    if (name.includes('title.') || name.includes('price.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(editProduct(formData, productId));
      navigate('/product');
     
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  return (
    <EditProductContainer>
      <Paper elevation={3}>
        <EditProductHeader variant="h4" component="h2" gutterBottom>
          Edit Product
        </EditProductHeader>
        <EditProductForm onSubmit={handleSubmit}>
          <EditProductInput
            fullWidth
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
          />
          <EditProductInput
            fullWidth
            label="URL"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Detail URL"
            name="detailUrl"
            value={formData.detailUrl}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Short Title"
            name="title.shortTitle"
            value={formData.title.shortTitle}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Long Title"
            name="title.longTitle"
            value={formData.title.longTitle}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="MRP"
            type="number"
            name="price.mrp"
            value={formData.price.mrp}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Cost"
            type="number"
            name="price.cost"
            value={formData.price.cost}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Discount"
            name="price.discount"
            value={formData.price.discount}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Quantity"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Description"
            multiline
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
       
          <EditProductInput
            fullWidth
            label="Sale"
            name="sale"
            value={formData.sale}
            onChange={handleChange}
          />
          <EditProductInput
            fullWidth
            label="Tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
          />
          <EditProductButton
            type="submit"
            variant="contained"
            color="primary"
          >
            Update
          </EditProductButton>
        </EditProductForm>
      </Paper>
    </EditProductContainer>
  );
};

export default EditProduct;

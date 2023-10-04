
import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Paper, TextField, Typography, styled } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editSeller } from '../../redux/actions/sellerAction';

const EditSellerContainer = styled(Container)`
  margin-top: 100px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const EditSellerHeader = styled(Typography)`
  margin-bottom: 20px;
`;

const EditSellerForm = styled('form')`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 20px;
  }
`;

const EditSellerInput = styled(TextField)`
  margin-bottom: 10px;
`;

const EditSellerButton = styled(Button)`
  align-self: flex-start;
`;
const Account = () => {
  const { sellerId } = useParams();
    const { account } = useContext(DataContext);
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sellerData, setSellerData] = useState({
    id: account.id || '',
    firstname: account.firstname || '',
    lastname: account.lastname || '',
    sellername: account.sellername || '',
    email: account.email || '',
    password: account.password || '',
    phone: account.phone || '',
    accno: account.accno || '',
    cvv: account.cvv || '',
    storeName: account.storeName || '',
  });
  useEffect(() => {
    if(Array.isArray(account)&& sellerId){
    const seller = account.find((seller) => seller.id === sellerId);

    if (seller) {
      setSellerData(seller);
    }
    }
  }, [sellerId, account]);
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSellerData({
            ...sellerData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await dispatch(editSeller(sellerData,sellerId));
          navigate('/');
        } catch (error) {
          console.error('Error editing seller:', error);
        }
      };
  return (
    <EditSellerContainer>
      <Paper elevation={3}>
        <EditSellerHeader variant="h4" component="h2" gutterBottom>
          Edit Seller
        </EditSellerHeader>
        <EditSellerForm onSubmit={handleSubmit}>
        <EditSellerInput
            fullWidth
            label="Seller id"
            name="id"
            value={sellerData.id}
            onChange={handleChange}
            placeholder="Enter Seller id" 
          />
          <EditSellerInput
            fullWidth
            label="Firstname"
            name="firstname"
            value={sellerData.firstname}
            onChange={handleChange}
            placeholder="Enter Firstname" 
          />
          <EditSellerInput
            fullWidth
            label="Lastname"
            name="lastname"
            value={sellerData.lastname}
            onChange={handleChange}
            placeholder="Enter Lastname" 
          />
          <EditSellerInput
            fullWidth
            label="Sellername"
            name="sellername"
            value={sellerData.sellername}
            onChange={handleChange}
            placeholder="Enter Sellername" 
          />
          <EditSellerInput
            fullWidth
            label="Email"
            name="email"
            value={sellerData.email}
            onChange={handleChange}
            placeholder="Enter Email" 
          />
          <EditSellerInput
            fullWidth
            label="Password"
            name="password"
            value={sellerData.password}
            onChange={handleChange}
            placeholder="Enter Password" 
          />
          <EditSellerInput
            fullWidth
            label="Phone"
            name="phone"
            value={sellerData.phone}
            onChange={handleChange}
            placeholder="Enter Phone no" 
          />
          
          <EditSellerInput
            fullWidth
            label="ACC No"
            name="accno"
            value={sellerData.accno}
            onChange={handleChange}
            placeholder="Enter Acc no" 
          />
          <EditSellerInput
            fullWidth
            label="CVV"
            name="cvv"
            value={sellerData.cvv}
            onChange={handleChange}
            placeholder="Enter CVV" 
          />
          <EditSellerInput
            fullWidth
            label="storeName"
            name="storeName"
            value={sellerData.storeName}
            onChange={handleChange}
            placeholder="Enter Store Name" 
          />
          
          <EditSellerButton type="submit" variant="contained" color="primary">
            Update
          </EditSellerButton>
        </EditSellerForm>
      </Paper>
    </EditSellerContainer>
  );
};

export default Account;
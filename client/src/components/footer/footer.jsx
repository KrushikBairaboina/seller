import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, styled } from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { getProducts } from '../../redux/actions/productActions';
import { getOrders } from '../../redux/actions/orderAction';
import { getDelivery } from '../../redux/actions/deliveryAction';
import { getUser } from '../../redux/actions/userAction';
import BasicSparkLineCustomization from './graph';
import { Link } from 'react-router-dom';
const Container = styled(Box)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 16px;
  margin: 80px 20px 20px 20px;
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 84vh;
  background: linear-gradient(
    to bottom,
    #DDAF94,
    #E8CEBF,
    #FDF8F5
  ); 
`;
const StatBox = styled(Link)`
  width: calc(25% - 32px);
  margin: 16px;
  padding: 10px 12px;
  border-radius: 20px;
  height: 25vh;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  transition: 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background: linear-gradient(
    to bottom,
    #DDAF94,
    #E8CEBF,
    #FDF8F5
  ); 
  text-decoration: none;
  color: inherit; 
  &:hover {
    color: inherit;
  }
`;
const Footer = () => {
  const { products } = useSelector((state) => state.getProducts);
  const { orders } = useSelector((state) => state.getOrders); 
  const { delivery } = useSelector((state) => state.getDelivery);
  const { user } = useSelector((state) => state.getUser);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProducts());
    dispatch(getOrders());
    dispatch(getDelivery());
    dispatch(getUser());
  }, [dispatch]);
  const pendingOrders = orders.filter(order => order.status !== 'Delivered');
  const completedOrders = orders.filter(order => order.status === 'Delivered');

  const calculateOrderTotal = (order) => {
    return order.products.reduce((subtotal, product) => subtotal + product.price, 0);
  };
  const totalSales = orders.reduce((total, order) => total + calculateOrderTotal(order), 0);
  return (
    <Container>
      <StatBox to="/product">
        <Box>
          <ShoppingBagIcon style={{ fontSize: 45 }} />
        </Box>
        <Typography style={{ margin: 30, fontSize: 35 }}>Total Products</Typography>
        <Typography style={{ fontSize: 30 }}>{products.length}</Typography>
      </StatBox>
      <StatBox to="/clist" >
        <Box>
          <PeopleAltIcon style={{ fontSize: 45 }} />
        </Box>
        <Typography style={{ margin: 30, fontSize: 35 }}>Total Users</Typography>
        <Typography style={{ fontSize: 30 }}>{user.length}</Typography>
      </StatBox>
      <StatBox to="/dlist">
        <Box>
          <TwoWheelerIcon style={{ fontSize: 45 }} />
        </Box>
        <Typography style={{ margin: 30, fontSize: 35 }}>Total Delivery Boys</Typography>
        <Typography style={{ fontSize: 30 }}>{delivery.length}</Typography>
      </StatBox>
      <StatBox to="/orders">
        <Box>
          <ProductionQuantityLimitsIcon style={{ fontSize: 45 }} />
        </Box>
        <Typography style={{ margin: 30, fontSize: 35 }}>Pending Orders</Typography>
        <Typography style={{ fontSize: 30 }}>{pendingOrders.length}</Typography>
      </StatBox>
      <StatBox to="/orders">
        <Box>
          <ShoppingCartCheckoutIcon style={{ fontSize: 45 }} />
        </Box>
        <Typography style={{ margin: 30, fontSize: 35 }}>Completed Orders</Typography>
        <Typography style={{ fontSize: 30 }}>{completedOrders.length} </Typography>
      </StatBox>
      <StatBox>
        <Box>
          <AccountBalanceIcon style={{ fontSize: 45 }} />
        </Box>
        <Typography style={{ margin: 30, fontSize: 35 }}>Total Sales</Typography>
        <Typography style={{ fontSize: 30 }}>₹{totalSales}</Typography>
      </StatBox>
      <BasicSparkLineCustomization/>
    </Container>
  );
};

export default Footer;
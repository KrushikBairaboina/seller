import React, { Component } from 'react';
import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './components/account/account';
import Product from './components/products/products';
import Order from './components/orders/orders';
import Delivery from './components/list/deliveryList';
import User from './components/list/userList';
import DataProvider from './context/DataProvider';
import EditProduct from './components/products/editProduct';
import AddProduct from './components/products/addProduct';
import EditOrder from './components/orders/editOrder';
class App extends Component {
  render() {
    return (
      <DataProvider>
        <BrowserRouter>
          <Header/>
          <Box style={{marginTop: 54}}>
          </Box>  
          <Routes>
            <Route path='/' element={<Footer/>} />
            <Route path='/product' element={<Product/>}/>
            <Route path='/orders' element={<Order/>}/>
            <Route path='/dlist' element={<Delivery/>}/>
            <Route path='/clist' element={<User/>}/>
            <Route path='/editOrder/:orderId/:index' element={<EditOrder/>}/>
            <Route path="/editProduct/:productId" element={<EditProduct/>} />
            <Route path='/addProduct' element={<AddProduct/>}/>
            <Route path='/account/:sellerId' element={<Account/>}/>
          </Routes>
        </BrowserRouter>
      
      </DataProvider>
    );
  }
}

export default App;
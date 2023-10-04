import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Grid, styled, Typography } from '@mui/material';
import { getOrders } from '../../redux/actions/orderAction';
import { Link } from 'react-router-dom';

const Wrapper = styled(Grid)`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Order = () => {
  const { orders } = useSelector((state) => state.getOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const generateSNO = () => {
    let sno = 1;
    return function () {
      return sno++;
    };
  };

  const getSNO = generateSNO();

  const pendingOrders = orders.filter((order) => order.status !== 'Delivered');
  const completedOrders = orders.filter((order) => order.status === 'Delivered');

  return (
    <Grid container spacing={2}>
      <Wrapper item xs={6}>
        <Typography> Total Orders: {orders.length} </Typography>
        <Typography> Pending Orders: {pendingOrders.length} </Typography>
        <Typography> Completed Orders: {completedOrders.length} </Typography>
      </Wrapper>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <h4>Pending Orders</h4>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>SNO</strong></TableCell>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Username</strong></TableCell>
                <TableCell><strong>Image</strong></TableCell>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
                <TableCell><strong>Amount</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>DBoy</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pendingOrders.map((order) => (
                order.products.map((product, index) => (
                  <TableRow key={order.id + index}>
                    <TableCell>{getSNO()}</TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.username}</TableCell>
                    <TableCell>
                      <img src={product.url} alt={product.title.shortTitle} style={{ maxWidth: '100px' }} />
                    </TableCell>
                    <TableCell>{product.title.longTitle}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>{order.deliveryBoy}</TableCell>
                    <TableCell>
                      <Link to={`/editOrder/${order.id}/${index}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                          EDIT
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <h4>Completed Orders</h4>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>SNO</strong></TableCell>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Username</strong></TableCell>
                <TableCell><strong>Image</strong></TableCell>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
                <TableCell><strong>Amount</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>DBoy</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {completedOrders.map((order) => (
                order.products.map((product, index) => (
                  <TableRow key={order.id + index}>
                    <TableCell>{getSNO()}</TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.username}</TableCell>
                    <TableCell>
                      <img src={product.url} alt={product.title.shortTitle} style={{ maxWidth: '100px' }} />
                    </TableCell>
                    <TableCell>{product.title.longTitle}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>{order.deliveryBoy}</TableCell>
                    <TableCell>
                      <Link to={`/editOrder/${order.id}/${index}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                          EDIT
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Order;

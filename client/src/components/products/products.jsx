import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Grid,styled } from '@mui/material';
import { Link } from 'react-router-dom';
import AddProduct from './addProduct';
const Wrapper = styled(Grid)`
    margin-top: 20px ;
`;
const Product = () => {
  const[open,setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
}

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const generateSNO = () => {
    let sno = 1;
    return function () {
      return sno++;
    };
  };

  const getSNO = generateSNO();
  

  return (
<Grid container spacing={2}>
      <Wrapper item xs={6}>
        <Box mt={2}>
          <p>Results: {products.length} products</p>
        </Box>
      </Wrapper>
      <Wrapper item xs={6} container justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={() => openDialog()}>
          
            Add Product
          
        </Button>
      </Wrapper>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Table>
            <TableHead>
            <TableRow>
                <TableCell>
                  <strong>SNO</strong>
                </TableCell>
                <TableCell>
                  <strong>ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Image</strong>
                </TableCell>
                <TableCell>
                  <strong>Title</strong>
                </TableCell>
                <TableCell>
                  <strong>Price</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
                <TableCell>
                  <strong>ACTION</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{getSNO()}</TableCell>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <img src={product.url} alt={product.title.shortTitle} style={{ maxWidth: '100px' }} />
                  </TableCell>
                  <TableCell>{product.title.longTitle}</TableCell>
                  <TableCell>{product.price.cost}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    <Link to={`/editProduct/${product.id}`} style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary">
                        EDIT
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <AddProduct open={open} setOpen={setOpen}/>
    </Grid>
  );
};

export default Product;

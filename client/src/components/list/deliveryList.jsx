import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Paper, Grid, styled } from '@mui/material';
import { getDelivery } from '../../redux/actions/deliveryAction';

const StyledTable = styled(Table)({
  margin: '20px', 
});

const Delivery = () => {
  const { delivery } = useSelector((state) => state.getDelivery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDelivery());
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
      <Grid item xs={12}>
        <Paper elevation={2}>
          {delivery.length > 0 && ( 
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} style={{ fontWeight: 'bold' }}>LIST OF DELIVERY BOYS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SNO</TableCell>
                  <TableCell>Username</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {delivery.map((delivery) => (
                  <TableRow key={delivery.id}>
                    <TableCell>{getSNO()}</TableCell>
                    <TableCell>{delivery.dboyname}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          )}
          {delivery.length === 0 && ( 
            <Box p={2} fontWeight="bold">
              No delivery boys available.
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Delivery;
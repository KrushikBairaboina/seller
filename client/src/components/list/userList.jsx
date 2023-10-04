import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Paper, Grid, styled } from '@mui/material';
import { getUser } from '../../redux/actions/userAction';

const StyledTable = styled(Table)({
  margin: '20px', 
});

const User = () => {
  const { user } = useSelector((state) => state.getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
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
        <Paper elevation={3}>
          {user.length > 0 && ( 
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} style={{ fontWeight: 'bold' }}>LIST OF USERS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SNO</TableCell>
                  <TableCell>Username</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.map((user) => (
                  <TableRow key={user.firstname}>
                    <TableCell>{getSNO()}</TableCell>
                    <TableCell>{user.username}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          )}
          {user.length === 0 && ( 
            <Box p={2} fontWeight="bold">
              No Users available.
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default User;

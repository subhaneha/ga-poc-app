import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InfoCard } from '../components/common/Card';
import {  AutorenewTwoTone, Groups, People } from '@mui/icons-material';
import { ListBox } from '../components/common/ListBox';

export const DashboardPage: React.FC = () => {
  const userTypes=[
    {typeName:"consultant",value:3},
    {typeName:"contractor",value:0},
    {typeName:"employee",value:0},
    {typeName:"External Customer",value:0},
    {typeName:"consultant",value:3},
    {typeName:"contractor",value:0},
    {typeName:"employee",value:0},
    {typeName:"External Customer",value:0}
  ]
  return (
    <Grid container margin={'12px auto'}>
      <Grid container display={'flex'} justifyContent={'space-between'}>
        <Typography color='#00649b' fontWeight={600}>Dashboard</Typography>
        <Typography display={'flex'} ><AutorenewTwoTone/> Refresh</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard background='#8674a7' title="Active Users" count={3} IconComponent={Groups} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard background='#ffb240' title="Password Expired Users" count={0} IconComponent={Groups} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard background='#e55a58' title="Inactive Users" count={0} IconComponent={Groups} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard background='#ffb240' title="Locked Users" count={0} IconComponent={Groups} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ my: 2}} >
        <Grid item xs={12} sm={6} md={4}>
          <ListBox resources={userTypes} title='User Types' subtitle='No. of Users' IconComponent={People}  />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ListBox resources={userTypes} title='User Types' subtitle='No. of Users' IconComponent={People}  />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ListBox resources={userTypes} title='User Types' subtitle='No. of Users' IconComponent={People}  />
        </Grid>
      </Grid>
    </Grid>
  );
};

import React from 'react';
import { Grid } from '@mui/material';
import { InfoCard } from '../components/common/Card';
import { People, Lock, Warning, LockOpen } from '@mui/icons-material';

export const DashboardPage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <InfoCard title="Active Users" count={3} IconComponent={People} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <InfoCard title="Password Expired Users" count={0} IconComponent={Lock} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <InfoCard title="Inactive Users" count={0} IconComponent={Warning} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <InfoCard title="Locked Users" count={0} IconComponent={LockOpen} />
      </Grid>
    </Grid>
  );
};

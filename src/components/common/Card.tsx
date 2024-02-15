import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';

interface InfoCardProps {
  title: string;
  count: number;
  IconComponent: React.ElementType;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, count, IconComponent }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            {count}
          </Typography>
          <IconComponent style={{ fontSize: 60, color: theme.palette.primary.main }} />
        </Box>
      </CardContent>
    </Card>
  );
};

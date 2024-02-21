import React from 'react';
import { Card, CardContent, Typography, Box, useTheme,styled } from '@mui/material';

interface InfoCardProps {
  title: string;
  count: number;
  IconComponent: React.ElementType;
  background:string;

}

const StyledCardContent=styled(CardContent)({
display:'flex',
justifyContent:"space-between",
padding:'8px'
})

export const InfoCard: React.FC<InfoCardProps> = ({ title, count, IconComponent,background }) => {
  const theme = useTheme();

  return (
    <Card style={{backgroundColor:background,marginTop:'12px'}}>
      <StyledCardContent >
      <IconComponent style={{fill:'#eeefef', fontSize: 60, color: theme.palette.primary.main }} />
        <Box display="flex" flexDirection="column"  alignItems="flex-end">
          <Typography variant="h5">
            {count}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        </Box>
      </StyledCardContent>
    </Card>
  );
};

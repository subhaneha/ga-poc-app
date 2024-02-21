import React from 'react'
import { Grid, Typography, styled } from '@mui/material'

interface ListBoxProps{
  IconComponent: React.ElementType;
  title:string;
  subtitle:string;
  resources:{
    typeName:string;
    value:number;
  }[]

}
const StyledListBox=styled(Grid)({
width:"350px",
'.footer':{
  backgroundColor:'#00649b',
  color:"#ffffff",
  padding:'4px 8px'
},
'.header':{
  backgroundColor:'#f6f6f6',
  color:'#096092',
  padding:'4px 8px'
},
'.contents':{
display:'flex',
flexDirection:'column',
rowGap:'4px',
overflow:'auto',
  '.value':{
  backgroundColor:'#f1eff0',
  padding:'2px 12px'
  }
}
})
export const ListBox:React.FC<ListBoxProps>=({IconComponent,title,subtitle,resources})=>{

  return(
    <StyledListBox>
      <Grid className="header" display="flex" justifyContent="space-between">
        <Grid display="flex" >
          <IconComponent />
          <Typography>{title}</Typography>
        </Grid>
        <Typography>{subtitle}</Typography>
      </Grid>
      <Grid border={"1px solid #c0c0c0"} height={'250px'} className="contents" padding="4px 8px" >
        {resources.map((resource)=><Grid display="flex" justifyContent="space-between" key={resource.typeName}>
          <Typography>{resource.typeName}</Typography>
          <Typography className="value">{resource.value}</Typography>
        </Grid>)}
      </Grid>
      <Grid className='footer' display="flex" justifyContent="space-between">
        <Typography>Total</Typography>
        <Typography>3</Typography>
      </Grid>
    </StyledListBox>
  )
}
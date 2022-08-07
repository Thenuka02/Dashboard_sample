import { Card, Typography } from '@mui/material';

export default function MainCard({ title, total, icon, sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        background: "#FFFFFF",
        border:" 1px solid #DFE0EB",
        borderRadius: "8px",
        '&:hover, &:active': {
          border:" 1px solid #3751FF",
        },
        ...sx,
      }}
      {...other}
    >
      

      <Typography variant="subtitle2" sx={{ color: "#9FA2B4",'&:hover, &:focus': {
            color: "#3751FF",
        }, }}>
        {title}
      </Typography>

      <Typography sx={{ color: "#252733", fontSize:30,'&:hover, &:focus': {
            color: "#3751FF",
        }, }}>{total}</Typography> 
    </Card>
  );
}
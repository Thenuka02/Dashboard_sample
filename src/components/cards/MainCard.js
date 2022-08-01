import { Card, Typography } from '@mui/material';

export default function MainCard({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        background: "#FFFFFF",
      

        border:" 1px solid #DFE0EB",
        borderRadius: "8px",
    //     color: (theme) => theme.palette[color].darker,
    //    // bgcolor: (theme) => theme.palette[color].lighter,
    //     bgcolor: "blue",
        ...sx,
      }}
      {...other}
    >
      

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>

      <Typography >{total}</Typography> 
    </Card>
  );
}
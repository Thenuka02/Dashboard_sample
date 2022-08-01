import React from "react";
import { Grid, Typography  } from '@mui/material';
import MainCard from '../components/cards/MainCard';

const Article = () =>{
 
    return (
        <div >
          
          <Typography variant="h4" sx={{ mb: 5 }}>
          Hi
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="Unresolved" total={60}  />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="Overdue" total={16} color="info" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="Open" total={43} color="warning"  />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="On hold" total={64} color="error" />
          </Grid>

          

              </Grid>
        </div>
      );
}

export default Article;
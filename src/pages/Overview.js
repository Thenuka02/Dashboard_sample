import React from "react";
import { Grid, Typography, Divider ,Box , Button} from '@mui/material';
import MainCard from '../components/cards/MainCard';
import UnresolvedTicket from "../components/cards/UnresolvedTicket";
import { faker } from '@faker-js/faker';

import Task from "../components/cards/Task";
const Overview = () =>{
 
    return (
        <div >
          
          {/* <Typography variant="h4" sx={{ mb: 5 }}>
         Overview
        </Typography> */}

        <Grid container spacing={1} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="Unresolved" total={60}  />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="Overdue" total={16} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="Open" total={43}   />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <MainCard title="On hold" total={64}  />
          </Grid>
          <Box
          sx={{
            width: 800,
            height: 300,
            backgroundColor: '#FFFFFF',
            mb: 5,
            mt:5,
          }}
          >
           <Typography variant="h3" sx={{ textAlign: "center" }}>Graph</Typography>
          </Box>  
          
          <Grid container spacing={6} >
          <Grid item xs={12} md={6} lg={6} >
           
             <UnresolvedTicket
              title=""
              listUnresolvedTicket={[
                { id: '1', label: 'Waiting on Feature Request' ,num:"4238" },
                { id: '2', label: 'Awaiting Customer Response', num:"1005" },
                { id: '3', label: 'Awaiting Developer Fix', num:"914" },
                { id: '4', label: 'Pending' ,num:"281" },
              ]}
            /> 
          </Grid>

          <Grid item xs={12} md={6} lg={6} >
            <Task
              title="Task"
              subheader="Today"
              // list={[
              //   { id: '1', label: 'Finish ticket update' , button:"URGENT"  },
              //   { id: '2', label: 'Create new ticket example', button:"NEW"   },
              //   { id: '3', label: 'Update ticket report', button:"DEFAULT" },
              // ]}   
              list={[
                { id: '1', label: 'Finish ticket update' , 
                button:  <Button  sx={{ color: '#FFFFFF', backgroundColor: '#FEC400', borderRadius: "8px" }}>URGENT </Button>  },
                { id: '2', label: 'Create new ticket example', 
                button:  <Button  sx={{ color: '#FFFFFF', backgroundColor: '#29CC97', borderRadius: "8px" }}>NEW </Button>  },
                  
                { id: '3', label: 'Update ticket report', 
                button:  <Button  sx={{ color: '#FFFFFF', backgroundColor: '#F0F1F7', borderRadius: "8px" }}>DEFAULT </Button>  },
             
              ]}  
            />
           
          </Grid>
              </Grid>
        </Grid>
        </div>
      );
}

export default Overview;
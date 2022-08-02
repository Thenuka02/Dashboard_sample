
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, Stack, Divider,  MenuItem, Button, CardHeader, FormControlLabel, Checkbox, Typography , Box } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import MuiCheckbox from '@mui/material/Checkbox';
import { Label } from '@material-ui/icons';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#252733",
  },
  
}));  

export default function UnresolvedTicket({ title, subheader, list,listUnresolvedTicket, ...other }) {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2'],
    },
  });
  const classes = useStyles();

  return (
    <Card {...other}>
      {/* <CardHeader subheader={subheader} /> */}
      <Controller
        name="taskCompleted"
        control={control}
        render={({ field }) => {
          const onSelected = (task) =>
            field.value.includes(task) ? field.value.filter((value) => value !== task) : [...field.value, task];

          return (
            <>
            <Stack direction="row" alignItems="center" spacing={2}>
    
              <Box sx={{  flexGrow: 1 ,mt:1 }}>

              <Typography variant="body2" noWrap  
              sx={{ flexGrow: 1 , px: 2,
                  py: 0.75 ,color: "#252733", fontSize:19}}>
              Unresolved tickets
              </Typography>
              </Box>

              <Button  sx={{ pr: 3, flexShrink: 0 ,mt: 2 }}>
              View details
              </Button>
            </Stack>
            <Typography variant="body2" noWrap  
              sx={{ flexGrow: 1, m: 0 , px: 2,
                  py: 0.1,color: "#9FA2B4", fontSize:12}}>
              Group: Support
              </Typography>
           
              {listUnresolvedTicket.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  checked={field.value.includes(task.id)}
                  onChange={() => field.onChange(onSelected(task.id))}
                />
              ))}
            </>
          );
        }}
      />
    
    </Card>
  );
}



function TaskItem({ task, checked,label, icon, checkedIcon , num   }) {
  const [open, setOpen] = useState(null);
 

// function TextLable({   }) {
//     return (
//       <Box
     
       
//       />
//     );
//   }
  
  return (
    
    // <Stack
    //   direction="row"
    //   sx={{
    //     px: 2,
    //     py: 1,
    //     ...(checked && {
    //       // color: 'text.disabled',
    //       // textDecoration: 'line-through',
    //     }),
    //   }}
    // >
    // {/* <Typography>
    // {task.label}
    // </Typography>
    //   <Button > {task.num}</Button> */}

      <>
      <Stack direction="row" alignItems="center" spacing={2}>
    
    <Box sx={{  flexGrow: 1 }}>

    <Typography variant="body2" noWrap  
     sx={{ flexGrow: 1, m: 0 , px: 2,
      py: 1.2 ,color: "#252733", fontSize:14}}>
    
   {task.label}
    </Typography>
    </Box>

    <Typography  sx={{ pr: 3, flexShrink: 0 , color: "#9FA2B4" }}>
    {task.num}
    </Typography>
  </Stack>
    </>  
     
  
  );
 
    
    }




  
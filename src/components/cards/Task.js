import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, Stack, Divider,  MenuItem, Button, CardHeader,Grid, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import MuiCheckbox from '@mui/material/Checkbox';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  subheader: {
    color: "#9FA2B4",
   
  },
  
}));  


export default function Task({ title, subheader, list, ...other }) {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2'],
    },
  });
  const classes = useStyles();


  return (
    
    <Card {...other}>
      {/* <CardHeader  
      title={title}  
      subheader={<Typography className={classes.subheader}>{subheader} </Typography>} 
      
       
      />  */}
      {/* <Box sx={{ p: 0, textAlign: 'right' }}>
        <Button >
          View all
        </Button>
      </Box> */}
      
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
             Task
              </Typography>
              </Box>

              <Button  sx={{ pr: 3, flexShrink: 0 ,mt: 2 }}>
              View details
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
    
            <Box>
            <Typography variant="body2" sx={{ flexGrow: 1, m: 1 , color: "#C5C7CD"}}>
             Create new task
            </Typography>
            </Box>

            <Typography variant="caption" >
           
            </Typography>
            </Stack>
            <Divider />
              {list.map((task) => (
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



function TaskItem({ task, checked,  }) {
  const [open, setOpen] = useState(null);
 

function Checkbox({ label, icon, checkedIcon , button  }) {
    return (
      <FormControlLabel
      sx={{ flexGrow: 1, m: 0 }}
        label={label}
        button={button}
        control={
          <MuiCheckbox defaultChecked icon={icon} checkedIcon={checkedIcon} />
        }
      />
    );
  }
  
  return (
    <Stack
      direction="row"
      sx={{
        px: 2,
        py: 0.2,
        ...(checked && {
          // color: 'text.disabled',
          // textDecoration: 'line-through',
        }),
      }}
    >

  <Checkbox
        label={task.label}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />

      <Button > {task.button}</Button>
      
     
    
    </Stack>
  );
}




  
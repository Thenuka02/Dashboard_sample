
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, Stack, Divider,  MenuItem, Button, CardHeader, FormControlLabel, Checkbox, Typography , Box } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import MuiCheckbox from '@mui/material/Checkbox';
import { Label } from '@material-ui/icons';

export default function UnresolvedTicket({ title, subheader, list,listUnresolvedTicket, ...other }) {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2'],
    },
  });

  return (
    <Card {...other}>
      <CardHeader subheader={subheader} />
      <Controller
        name="taskCompleted"
        control={control}
        render={({ field }) => {
          const onSelected = (task) =>
            field.value.includes(task) ? field.value.filter((value) => value !== task) : [...field.value, task];

          return (
            <>
            <Stack direction="row" alignItems="center" spacing={2}>
    
              <Box sx={{ minWidth: 240, flexGrow: 1 }}>

              <Typography variant="body2" noWrap>
              Unresolved tickets
              </Typography>
              </Box>

              <Typography variant="caption" sx={{ pr: 3, flexShrink: 0 }}>
              View details
              </Typography>
            </Stack>
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
    <Stack
      direction="row"
      sx={{
        px: 2,
        py: 0.75,
        ...(checked && {
          // color: 'text.disabled',
          // textDecoration: 'line-through',
        }),
      }}
    >
    <Typography>
    {task.label}
    </Typography>
 

      <Button> {task.num}</Button>
      
      <Divider sx={{ mb: 1.5 }} />
    
    </Stack>
  );
}




  
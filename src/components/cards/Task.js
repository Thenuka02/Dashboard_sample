import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, Stack, Divider,  MenuItem, Button, CardHeader,Grid, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import MuiCheckbox from '@mui/material/Checkbox';

export default function Task({ title, subheader, list, ...other }) {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2'],
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
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
             Create new
            </Typography>
            </Box>

            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0 }}>
            add
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
        py: 0.75,
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

      <Button variant="contained"> {task.button}</Button>
      
      <Divider sx={{ mb: 1.5 }} />
    
    </Stack>
  );
}




  
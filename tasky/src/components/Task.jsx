import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = (props) => {
  return (
    <Grid key={props.id} size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          backgroundColor: props.done ? 'grey.200' : 'background.paper',
          padding: '16px',
          borderRadius: 3,
          boxShadow: 3,
          border: props.done ? '1px solid #ccc' : '1px solid #1976d2',
          transition: '0.3s',
          '&:hover': {
            boxShadow: 6,
          }
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: props.done ? 'grey.400' : 'primary.light',
            color: 'white',
            borderRadius: '6px',
            padding: '12px',
            textAlign: 'center',
            '& .MuiCardHeader-title': {
              fontWeight: 'bold',
              fontSize: '1.25rem',
            }
          }}
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
            <Chip
              label={`Due: ${props.deadline}`}
              color={props.done ? "default" : "primary"}
              variant="outlined"
              size="small"
            />
          </Box>
          <Typography
            component="p"
            variant="body1"
            align="center"
            sx={{ fontStyle: 'italic', color: 'text.primary', mt: 2 }}
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'space-between',
            padding: '12px'
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<CheckIcon />}
            onClick={props.markDone}
          >
            Done
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={props.deleteTask}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Task;
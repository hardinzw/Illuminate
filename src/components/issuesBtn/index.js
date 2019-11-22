import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IssuesBtn() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AddIcon />}
      >  
        New     
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<EditTwoToneIcon />}
      >  
        Edit     
      </Button>
    </div>
  );
}
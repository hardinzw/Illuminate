import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TableButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
      <IconButton aria-label="edit" disabled color="primary">
        <EditTwoToneIcon />
      </IconButton>
    </div>
  );
}
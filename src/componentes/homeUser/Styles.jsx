import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Margin } from '@mui/icons-material';

export const useStyles = makeStyles({
  prueba: {
    padding: '250px',
    width:'500px',
    border: '5px',
   
  },
  box:{
    backgroundColor: 'peru',
    display:'flex',
    justifyContent:'flex-end',
    marginBottom: '52px',
  },
  avatar:{
    backgroundColor: 'green',
    border:'1',
    borderRadius:'13px',
    width:'190px',
    height:'150px',

  },
  texto:{
    marginLeft:'3px',
  },
  body:{
    margin:'0',
  }

});

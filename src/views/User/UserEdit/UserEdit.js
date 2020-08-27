import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './UserEdit.css';

const useStyles = theme => ({
  root: {

    '& > *': {
      margin: 10,
      width: '25ch',
    },
  }
});


class UserEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {

    const classes = useStyles();


    return (
      <div>
        <h1> <strong> User Details </strong> </h1>
        <form className={`${classes.root} FormContainer`} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="FirstName" variant="outlined" />
          <TextField id="outlined-basic" label="LastName" variant="outlined" />
          <TextField id="outlined-basic" label="UserName" variant="outlined" />
        </form>
      </div >
    );
  }
}

export default UserEdit;
import React,{useState,useEffect} from 'react';
import { TextField,Select,FormControl, InputLabel,MenuItem} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import {validate} from './validate'
import './App.css';


const validate = (form) => {
  let error = {};
  for(let i in form){
    if(!form[i])error[i] = '*Required';
    if(i === 'email' && /[\w-]+@([\w-]+\.)+[\w-]+/.test(form[i]) === false )error[i] = 'Email is not valid';
    if(i === 'password' && /^(?=.*\d).{4,8}$/.test(form[i]) === false )error[i] = 'Password must be between 4 and 8 digits long and include at least one numeric digit.';
    if(i === 'p2' && form[i] !== form.password)error[i] = "password did not match"
  }

  return error;
}
 
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

  
function App() {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    submitData: false

  });

  
  useEffect(() => {
    const errors = validate(formState.values);
    
    
    setFormState(formState => ({
      ...formState, 
      isValid: (Object.keys(errors).length || Object.keys(formState.touched).length !== 8)? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formState.values);
    setFormState(formState =>({
      ...formState,submitData:true
    }))
  }

  const handleChange = event => {
    event.persist();
    const value = event.target.value;
    const name = event.target.name;
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
      
    }));
  };
  const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;
  
  return (
    <div className="App">
      <nav>
        <img src="https://pbs.twimg.com/profile_images/1159409099404005377/aZ8B7EIO_400x400.jpg" alt="91 SOCIAL" width = "150px"/>
        <h1>Fill this form to stay tune with Us</h1>
      </nav>
      <form className={classes.root} onSubmit={handleSubmit}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="title" onChange={handleChange} 
            error={hasError('title')}
            helperText={hasError('title') ? formState.errors.title : null}
            
          >
            <MenuItem value={'Mr. '}>Mr. </MenuItem>
            <MenuItem value={'Mrs.'}>Mrs. </MenuItem>
          </Select>
        </FormControl>
        <TextField id="standard-error" name="Fname" 
                   value = {''|| formState.values.Fname} label="First Name" onChange={handleChange} 
                   error={hasError('Fname')}
                   helperText={hasError('Fname') ? formState.errors.Fname : null}/>
        <TextField id="standard-error" label="last Name" name='Lname' value = {''||formState.values.Lname}
                   error={hasError('Lname')}
                   helperText={hasError('Lname') ? formState.errors.Lname : null}
                   onChange={handleChange} />
        
      </div>
      <div>
      <TextField 
        error={hasError('email')}
        helperText={hasError('email') ? formState.errors.email : null}  style={{'width':'30ch'}} id="standard-error" type= 'email'
        name="email" value = {''|| formState.values.email} label="Email" onChange={handleChange} />
      <TextField style={{'width':'30ch'}} id="standard-error"  label="Contact No." 
                name='contact' value= {''|| formState.values.contact} onChange={handleChange}
                error={hasError('contact')}
                helperText={hasError('contact') ? formState.errors.contact : null}/>
      </div>
      <div>
      <TextField style={{'width':'30ch'}} id="standard-error" label="Password "
                 name='password' value= {''|| formState.values.password} onChange={handleChange}
                 error={hasError('password')} type = 'password'
                 helperText={hasError('password') ? formState.errors.password : null} />
      <TextField style={{'width':'30ch'}} id="standard-error" label="Confirm Password"
                 name='p2' value= {''|| formState.values.p2} onChange={handleChange}
                 error={hasError('p2')}
                 helperText={hasError('p2') ? formState.errors.p2 : null}/>
      </div>
      <TextField multiline  style={{'width':'100%'}} id="standard-error" label="Address "
                 name='address' value= {''|| formState.values.address} onChange={handleChange}
                 error={hasError('address')}
                 helperText={hasError('address') ? formState.errors.address : null} />
      <Button
        className={classes.signInButton}
        color="primary"
        disabled={!formState.isValid}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        Sign in now
      </Button>

    </form>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
      {formState.submitData ?<table id = "data">
      <tr><th colSpan = '2'>Thanks for submitting </th></tr>
      { Object.keys(formState.values).map(i => {return <tr><td>{i}</td><td>{formState.values[i]}</td></tr>})}
      </table> : null}
      
    </div>
    </div>
  );
}   

export default App;

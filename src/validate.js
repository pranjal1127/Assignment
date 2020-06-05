const validate = (form) => {
  let error = {};
  for(let i in form){
    if(form[i] === '')error[i] = '*Required';
    if(i === 'email' && /[\w-]+@([\w-]+\.)+[\w-]+/.test(form[i]) === false )error[i] = 'Email is not valid';
    if(i === 'password' && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/.test(form[i]) === false )error[i] = 'please type strong password';
    if(i === 'p2' && form[i] !== form.password)error[i] = "password did not match"
  }

  return error;
}


// export default validate;
module.exports = validate;


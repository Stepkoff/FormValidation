import React, {useState} from 'react';
import FormInput from "../FormInput";
import s from './form.module.scss'

const Form = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
  })
  const inputs = [
    {
      id: 'inp-username',
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage: 'Username should be 3-16 characters',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$'
    },
    {
      id: 'inp-email',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'Should be a valid email address',
      required: true,
      pattern: "^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
    },
    {
      id: 'inp-password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter 1 number',
      required: true,
      pattern: "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})"
    }
    ,
    {
      id: 'inp-confirmPassword',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: 'Passwords don\'t match',
      required: true,
      pattern: values.password
    },
    {
      id: 'inp-birthday',
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      required: true,
    },
  ];
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // actions
  }
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h3>Register</h3>
      {inputs.map(input => (
        <FormInput key={input.id} {...input} value={values[input.name]} handleChange={handleChange}/>
      ))}
      <button>Submit</button>
    </form>
  );
};

export default Form;
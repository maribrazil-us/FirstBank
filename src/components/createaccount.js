import React from 'react';
import Card from './card';
import UserContext from './context';
import { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Bootstrap from 'react-bootstrap';

function CreateAccount() {
  
  const context = useContext(UserContext);
  const [input, setInput] = React.useState(false);
  
  
  const formikProps = {initialValues: {name: '', email: '', password: ''}, 

      
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      };
                    
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }  
      
      return errors;
    },

    handleChange: (event) => {
      const userInput = event.target.value;
        if (userInput != '') {
        setInput(true);
        }
    },  

    onSubmit: (values, { resetForm }) => {
      context.users.push({
        name: values.name,
        email: values.email,
        password: values.password,
        balance: 0,
      });
      resetForm();
      alert(`Successfully created account for ${values.name}`);
    }
  };

    return (
  
    <div className="dataEntry" style={{marginLeft: "2rem", marginTop: "2rem"}}>
        <h1>Create Account</h1> 
        <br/>
    <Card
        bgcolor="info"
        header="Create Account"
        body={
   <div className='content'>
      <Formik {...formikProps}>
        <Form onChange={formikProps.handleChange}>
          <div className='form-group'>
            <label htmlFor='username'>Name</label>
            <Field className='form-control' id='name' name='name' placeholder='Enter Name' />
            <ErrorMessage className='error' name='name' component='div' />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <Field className='form-control' id='email' name='email' type='email' placeholder='Enter Email' />
            <ErrorMessage className='error' name='email' component='div'/>
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field className='form-control' id='password' name='password' placeholder='********' type='password' />
            <ErrorMessage className='error' name='password' component='div' />
          </div>
          
          <br/>
          <button type='submit' className='btn btn-warning' disabled={!input}>Create Account</button>
        </Form>
        
      </Formik>
    </div>
}
    />
    </div>
  );
  
   
}


  export default CreateAccount
import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
  <>
    <h1 className="Login-body">Login-in</h1>
    <div className="Login-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </>

  );
}





















// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// function cliked(){
//     alert('clicked');
// }
// export function ContactUs(){
//     return(
//         <>
//         <div>
//             <h1>Contact us</h1>
//         </div>
//         <TextField id="outlined-basic" label="Outlined" variant="outlined" />

//       <Button variant="contained" onClick={cliked}>Button</Button>
    
//     </>
//     )
// }


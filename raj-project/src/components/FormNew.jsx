import React from 'react'
import { useForm } from 'react-hook-form';


const FormNew = () => {
    const form=useForm();
    const {register,handleSubmit,formState}=form;
    const {errors}=formState;
    const submitHandler=(data)=>{
        console.log("from submitted",data,"\nImage:",data.profile_image[0])
    }
    
  return (
    <div>
        <h1>Form</h1>
        <form  onSubmit={handleSubmit(submitHandler)}noValidate>
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" {...register("firstname",{required: "*First name is required!"})}/><br/><br/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/><br/><br/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/><br/><br/>

        <label for="profile_image">Profile Image:</label>
        <input type="file" id="profile_image" name="profile_image" accept="image/*"/><br/><br/>

        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default FormNew
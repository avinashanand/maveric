import React from 'react';
import { useForm } from "react-hook-form";
import ResponsiveAppBar from '../../component/header';
import Footer from '../../component/footer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

import axios from 'axios'

export default function CatalogAdmin() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:8080/catalog/add', data).then(response =>{
      console.log(response.data);
    })
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
            
    
    <Container maxWidth="xl">
    <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Create New Catalog SKU
          </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <InputLabel >Category</InputLabel>
        <Input  {...register("category", { required: true })} /> { errors.category && <span><Alert severity="error">This field is required — check it out!</Alert></span>}
        <InputLabel>Sub-Category</InputLabel>
        <Input  {...register("subCategory", { required: true })} /> { errors.subCategory && <span><Alert severity="error">This field is required — check it out!</Alert></span>}
        <InputLabel>Name</InputLabel>
        <Input  {...register("name", { required: true })} /> { errors.name && <span><Alert severity="error">This field is required — check it out!</Alert></span>}
        <InputLabel>Description</InputLabel>
        <Input  {...register("description", { required: true })} /> { errors.description && <span><Alert severity="error">This field is required — check it out!</Alert></span>}
        <InputLabel>Image</InputLabel>
        <Input defaultValue="/static/images/papaya.png" {...register("image", { required: true })} /> { errors.image && <span><Alert severity="error">This field is required — check it out!</Alert></span>}
        
        
        {/* errors will return when field validation fails  */}
       
        <br></br>
        <Button variant="contained" type='submit'>Submit</Button>
    </form>
    </Container>
    <Footer></Footer>
    </>
  );
}
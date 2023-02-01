import React, { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../App.css';

import axios from 'axios';
import { maxWidth } from "@mui/system";
export default function Catalog(props){
    const [items, setItems] = useState([]);
    const test = ["apple", "mango", "banana"];
    useEffect(() =>{
        axios.get('http://localhost:8080/catalog/all').then(res => {
            setItems(res.data);
        })
    },[]);
    return(
        <>
        <div className="float-container">
            {items.map((item, index) => (
                <Card sx={{ minWidth: 275, maxWidth:300 }} className="float-child">
                    <CardContent>
                        <CardMedia
                            component="img"
                            alt={item.name}
                            height="200"
                            image={item.image}
                            title="Contemplative Reptile"
                        />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                        {item.description}
                        </Typography>
                        
                        <Typography variant="body2">
                        {item.category} in {item.subCategory}
                        </Typography>
                    </CardContent>
                <CardActions>
                  <Button size="small">Add to Cart</Button>
                </CardActions>
              </Card>
            )
                
            )}
        </div>
        </>
       
    );
}
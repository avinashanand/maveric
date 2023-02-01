import React from 'react';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './footer.css';

export default function Footer(){
    return(
        <div className="footer-position">
            <Container maxWidth="xl">
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    VegeExpress
                 </Typography>
                 <Box sx={{ flexGrow: 0 }}>
                    Social Links
                 </Box>
            </Container>
            
        </div>
    );
}
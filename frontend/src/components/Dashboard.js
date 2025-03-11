import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button, Card, CardMedia, CardContent } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';
import Res1 from '../images/uber-eats-image.png';
import Res2 from '../images/ubereatsimg.jpg';
import Res3 from '../images/ueimg.jpg';

// Uber Eats branding colors
const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '120px',
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#2E7D32', // Uber Eats green
    },
    subtitle: {
        color: '#666',
        marginBottom: '20px',
    },
    browseButton: {
        backgroundColor: '#2E7D32',
        color: '#fff',
        marginTop: '15px',
        '&:hover': {
            backgroundColor: '#1B5E20',
        },
    },
    carousel: {
        maxWidth: '800px',
        margin: 'auto',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    featuredSection: {
        marginTop: '50px',
    },
    card: {
        maxWidth: 300,
        margin: '15px',
    },
    footer: {
        marginTop: '50px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
    },
}));

const Dashboard = () => {
    const mainReducer = useSelector((state) => state.mainReducer);
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container}>
            {/* Header Section */}
            <Typography className={classes.heading}>Uber Eats – Food Delivered Fast</Typography>
            <Typography className={classes.subtitle}>Discover your favorite meals from local restaurants.</Typography>
            

            {/* Image Carousel */}
            <div className={classes.carousel}>
                <Carousel variant="dark">
                    <Carousel.Item style={{ height: "400px" }}>
                        <img style={{ height: "400px" }} className="d-block w-100" src={Res1} alt="Uber Eats Promo" />
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "400px" }}>
                        <img style={{ height: "400px" }} className="d-block w-100" src={Res2} alt="Delicious Dish 2" />
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "400px" }}>
                        <img style={{ height: "400px" }} className="d-block w-100" src={Res3} alt="Delicious Dish 3" />
                    </Carousel.Item>
                </Carousel>
            </div>


            {/* Footer Section */}
            <Box className={classes.footer}>
                <Typography variant="body2">© 2025 Uber Eats. All rights reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Dashboard;

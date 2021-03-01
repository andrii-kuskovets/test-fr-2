import React from "react";
import {Paper, Box, Container, Typography} from '@material-ui/core';
import Saly from '../../assets/img/Saly.png';
import bgbanner from '../../assets/img/bgbanner.png'
import {useStyles} from '../../styles.js';


export default function Banner() {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.banner} elevation={0} style={{backgroundImage: `url(${bgbanner})`}}>
                <Container maxWidth='lg'>
                    <Box className={classes.flex}>
                        <Box>
                            <Typography variant='h1' className={classes.generalTitle}>
                                Everybody Gets
                                Rewarded!
                            </Typography>
                            <Typography variant='h5' className={classes.generalSubTitle}>
                                Turn your everyday customer into a loyal one.
                                It’s never been easier.
                            </Typography>
                        </Box>
                        <Box>
                            <img src={Saly} alt="banner" className={classes.bannerImg}/>
                        </Box>
                    </Box>
                </Container>
            </Paper>
        </>
    )
}
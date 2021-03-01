import React from "react";
import {Grid, Box, Container, Typography, FormControl, Input, InputLabel, Button} from '@material-ui/core';
import {useStyles} from '../../styles.js';


export default function Steps() {
    const classes = useStyles();
    const [value, setValue] = React.useState({});

    const handleChange = event =>  {
        event.persist();
        setValue(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return (
        <>
            <Typography variant='h2' className={classes.spepsTitle}>Simple as:</Typography>
            <Grid container spacing={3} className={classes.stepsCards}>
                <Grid container item xs={12} sm={6} md={4} spacing={1}>
                    <Box className={classes.step}>
                        <Box>
                            <Typography variant='h3' className={classes.stepNumber}>1</Typography>
                            <Typography variant='h6' className={classes.stepDescription}>Enter your business name</Typography>
                        </Box>
                        <Box>
                            <FormControl>
                                <Input
                                    name='name'
                                    value={value.name || ''}
                                    onChange={handleChange}
                                    className={classes.stepInput}
                                    placeholder='Business name'
                                />
                            </FormControl>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={12} sm={6} md={4} spacing={1}>
                    <Box className={classes.step}>
                        <Box>
                            <Typography variant='h3' className={classes.stepNumber}>2</Typography>
                            <Typography variant='h6' className={classes.stepDescription}>Start rewarding your customers </Typography>
                        </Box>
                        <Box>
                            <Button className={classes.stepBtn} variant="contained" color="primary">Create template</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={12} sm={6} md={4} spacing={1}>
                    <Box className={classes.step}>
                        <Box>
                            <Typography variant='h3' className={classes.stepNumber}>3</Typography>
                            <Typography variant='h6' className={classes.stepDescription}>Final step</Typography>
                        </Box>
                        <Box>
                            <Button className={classes.stepBtn} variant="contained" color="primary">Start now</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
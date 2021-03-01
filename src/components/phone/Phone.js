import React from "react";
import { Paper, Container,Typography, Box, FormControlLabel, Switch} from '@material-ui/core';
import keyboard from '../../assets/img/keyboard.png';
import maze from '../../assets/img/maze.png';
import phone from '../../assets/img/phone.png';
import {useStyles} from '../../styles.js';

export default function Phone() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const [show, setShow] = React.useState(true);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setShow(!show);
    };
    return (
        <>
        <Paper className={classes.phone}>
            <Container maxWidth='lg'>
                <Box className={classes.phoneHead}>
                    <Typography variant='h2' className={classes.phoneTitle}>
                        Don't lose your customers to
                                <svg className={classes.phoneGoogleIcon} width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.0638 16.5892C29.0638 15.4741 28.9715 14.6603 28.7717 13.8165H15.7781V18.8496H23.4051C23.2513 20.1004 22.421 21.9841 20.5757 23.2499L20.5499 23.4184L24.6582 26.5374L24.9428 26.5652C27.5568 24.1993 29.0638 20.7182 29.0638 16.5892Z" fill="#4285F4"/>
                                    <path d="M15.7773 29.8506C19.5139 29.8506 22.6507 28.645 24.942 26.5654L20.5749 23.25C19.4063 24.0487 17.8378 24.6063 15.7773 24.6063C12.1176 24.6063 9.01153 22.2404 7.90428 18.9703L7.74199 18.9838L3.47011 22.2238L3.41425 22.376C5.69001 26.8064 10.3646 29.8506 15.7773 29.8506Z" fill="#34A853"/>
                                    <path d="M7.90508 18.9704C7.61292 18.1265 7.44384 17.2223 7.44384 16.2881C7.44384 15.3537 7.61292 14.4496 7.88971 13.6057L7.88197 13.426L3.55655 10.134L3.41503 10.1999C2.47707 12.0384 1.93887 14.103 1.93887 16.2881C1.93887 18.4731 2.47707 20.5376 3.41503 22.3761L7.90508 18.9704Z" fill="#FBBC05"/>
                                    <path d="M15.7774 7.96972C18.3761 7.96972 20.129 9.06978 21.1286 9.98908L25.0343 6.25183C22.6356 4.06677 19.514 2.72559 15.7774 2.72559C10.3646 2.72559 5.69002 5.76959 3.41425 10.2L7.88894 13.6057C9.01156 10.3356 12.1177 7.96972 15.7774 7.96972Z" fill="#EB4335"/>
                                </svg>oogle search
                    </Typography>
                    <Typography variant='subtitle1' className={classes.phoneSubTitle}>
                        They might go elsewhere
                    </Typography>
                </Box>
                <Box className={classes.phoneDesktop}>
                    <Box className={classes.phoneImgs}>
                        <Box style={{position: 'relative'}}>
                            <img src={keyboard} alt="keyboard"/>
                            <svg className={classes.phoneLeftArrow} width="60" height="23" viewBox="0 0 60 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.93934 10.7274C0.353553 11.3132 0.353553 12.263 0.93934 12.8487L10.4853 22.3947C11.0711 22.9805 12.0208 22.9805 12.6066 22.3947C13.1924 21.8089 13.1924 20.8592 12.6066 20.2734L4.12132 11.7881L12.6066 3.3028C13.1924 2.71702 13.1924 1.76727 12.6066 1.18148C12.0208 0.595697 11.0711 0.595697 10.4853 1.18148L0.93934 10.7274ZM59.9998 10.2881L2 10.2881L2 13.2881L59.9998 13.2881V10.2881Z" fill="#33C759"/>
                            </svg>

                        </Box>
                        <Box className={classes.phoneImg}>
                            <img src={phone} alt="phone"/>
                        </Box>
                        <Box style={{position: 'relative'}}>
                            <img src={maze} alt="maze"/>
                            <svg className={classes.phoneRightArrow} width="60" height="23" viewBox="0 0 60 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.0607 10.7274C59.6465 11.3132 59.6465 12.263 59.0607 12.8487L49.5148 22.3947C48.929 22.9805 47.9792 22.9805 47.3935 22.3947C46.8077 21.8089 46.8077 20.8592 47.3935 20.2734L55.8787 11.7881L47.3935 3.3028C46.8077 2.71702 46.8077 1.76727 47.3935 1.18148C47.9792 0.595697 48.929 0.595697 49.5148 1.18148L59.0607 10.7274ZM0.000259399 10.2881L58.0001 10.2881V13.2881L0.000259399 13.2881V10.2881Z" fill="#EA4335"/>
                            </svg>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.phoneMobile}>
                    <Box className={classes.phoneMobileImgs}>
                        <Box className={show ? classes.phoneImgs : classes.phoneImgsHide} >
                            <Box style={{position: 'relative'}}>
                                <img className={classes.imgSize} src={keyboard} alt="keyboard"/>
                                <svg className={classes.phoneLeftArrow} width="60" height="23" viewBox="0 0 60 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.93934 10.7274C0.353553 11.3132 0.353553 12.263 0.93934 12.8487L10.4853 22.3947C11.0711 22.9805 12.0208 22.9805 12.6066 22.3947C13.1924 21.8089 13.1924 20.8592 12.6066 20.2734L4.12132 11.7881L12.6066 3.3028C13.1924 2.71702 13.1924 1.76727 12.6066 1.18148C12.0208 0.595697 11.0711 0.595697 10.4853 1.18148L0.93934 10.7274ZM59.9998 10.2881L2 10.2881L2 13.2881L59.9998 13.2881V10.2881Z" fill="#33C759"/>
                                </svg>

                            </Box>
                            <Box className={classes.phoneImg}>
                                <img className={classes.imgSize} src={phone} alt="phone"/>
                            </Box>
                        </Box>
                        <Box className={!show ? classes.phoneImgs : classes.phoneImgsHide}>
                            <Box className={classes.phoneImg}>
                                <img className={classes.imgSize} src={phone} alt="phone"/>
                            </Box>
                            <Box style={{position: 'relative'}}>
                                <img className={classes.imgSize} src={maze} alt="maze"/>
                                <svg className={classes.phoneRightArrow} width="60" height="23" viewBox="0 0 60 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M59.0607 10.7274C59.6465 11.3132 59.6465 12.263 59.0607 12.8487L49.5148 22.3947C48.929 22.9805 47.9792 22.9805 47.3935 22.3947C46.8077 21.8089 46.8077 20.8592 47.3935 20.2734L55.8787 11.7881L47.3935 3.3028C46.8077 2.71702 46.8077 1.76727 47.3935 1.18148C47.9792 0.595697 48.929 0.595697 49.5148 1.18148L59.0607 10.7274ZM0.000259399 10.2881L58.0001 10.2881V13.2881L0.000259399 13.2881V10.2881Z" fill="#EA4335"/>
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                    <FormControlLabel
                        className={classes.btnSwitch}
                        control={
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                    />
                </Box>

            </Container>
        </Paper>
        </>
    )
}
import React from "react";
import { AppBar, Container} from '@material-ui/core';
import {useStyles} from '../../styles.js';

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar position='absolute' color='transparent' className={classes.header}>
                <Container maxWidth='lg'>
                    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.1419 0H1.38404C1.01697 0 0.664933 0.145729 0.405376 0.405127C0.145818 0.664525 0 1.01635 0 1.38319V36.1197H13.1068V13.1173H36.1419V0Z" fill="black"/>
                        <path d="M36.1419 45.7012H0V80.4331C0 80.7999 0.145818 81.1517 0.405376 81.4111C0.664933 81.6705 1.01697 81.8163 1.38404 81.8163H13.1068V58.8138H36.1419V45.7012Z" fill="black"/>
                        <path d="M68.6894 0H45.6729V36.1197H58.7797V13.1173H68.671V36.1197H81.7963V1.38319C81.7963 1.01635 81.6505 0.664525 81.3909 0.405127C81.1314 0.145729 80.7793 0 80.4123 0H68.6894Z" fill="black"/>
                        <path d="M81.9993 75.273L65.5292 58.8131H81.8101V45.6958H58.7936H45.6729V58.8131V81.8109H58.7936V65.54L75.2682 81.9999L81.9993 75.273Z" fill="black"/>
                    </svg>
                </Container>
            </AppBar>
        </>
    )
}
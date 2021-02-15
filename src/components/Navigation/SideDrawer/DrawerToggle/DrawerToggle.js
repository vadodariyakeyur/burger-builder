import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div>{null}</div>
        <div>{null}</div>
        <div>{null}</div>
    </div>
);

export default DrawerToggle;
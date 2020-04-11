import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default (props) => {
    const classes = useStyles();
    const { label, value, onChange } = props;

    return (
        <div className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

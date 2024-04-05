import React from 'react';
import { TextField, Button } from '@material-ui/core';

function LoginForm() {
    return (
        <div className="login-form">
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <Button variant="contained" color="primary">Login</Button>
        </div>
    );
}

export default LoginForm;
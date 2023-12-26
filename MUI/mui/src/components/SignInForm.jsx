import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { AccountCircleRounded } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

export function SignInForm() {
    return (
        <Box component="section" sx={{ maxWidth: 700, flexGrow: 1 }}  >
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <AccountCircleRounded sx={{ color: pink[500], fontSize: 70}}/>
                </Grid>

                <Grid xs={12}>
                    <h2 color='gray'>Sign In</h2>
                </Grid>

                <Grid xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        fullWidth
                    />
                </Grid>

                <Grid xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        fullWidth
                        type="password"
                    />
                </Grid>

                <Grid xs={6}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                    </FormGroup>
                </Grid>
                <Grid xs={6}>
                </Grid>


                <Grid xs={12}>
                    <Button variant="contained" fullWidth>Sign In</Button>
                </Grid>
                <Grid xs={12}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Link href="#">Forgot password?</Link>
                        <Link href="#">Dont have an account? Sign Up</Link>
                    </Stack>
                </Grid>

                <Grid xs={12}>
                    <p color='gray'>Copyright © Your Website 2023</p>
                </Grid>
            </Grid>
        </Box>
    )
}
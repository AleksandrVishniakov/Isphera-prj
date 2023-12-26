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

export function SignUpForm() {
    return (
        <Box component="section" sx={{ maxWidth: 700, flexGrow: 1 }}  >
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <AccountCircleRounded sx={{ color: pink[500], fontSize: 70}}/>
                </Grid>

                <Grid xs={12}>
                    <h2 color='gray'>Sign Up</h2>
                </Grid>

                <Grid xs={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        fullWidth
                    />
                </Grid>

                <Grid xs={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        fullWidth
                    />
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
                        <FormControlLabel control={<Checkbox defaultChecked />} label="I want to receive inspiration, marketing promotions and updates via email" />
                    </FormGroup>
                </Grid>
                <Grid xs={6}>
                </Grid>


                <Grid xs={12}>
                    <Button variant="contained" fullWidth>Sign Up</Button>
                </Grid>
                <Grid xs={12}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <div></div>
                        <Link href="#">Already have an account? Sign In</Link>
                    </Stack>
                </Grid>

                <Grid xs={12}>
                    <p color='gray'>Copyright © Your Website 2023</p>
                </Grid>
            </Grid>
        </Box>
    )
}
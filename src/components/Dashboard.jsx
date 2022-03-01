import React from 'react';
import {Grid, Card, Typography, CardContent} from '@mui/material'
import { useStyles } from './';

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <Grid item className={classes.dashboardGrid}>
                <Card className={classes.unresolvedTicketsCard}>
                    <CardContent className={classes.unresolvedTicketsCardContent}>
                        <Typography variant="h6">Unresolved Tickets</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.differentThings}>
                    <CardContent>
                        <Typography variant="h6">Something Else</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>

                </Card>
            </Grid>
            <Grid item>
                <Card>

                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard;
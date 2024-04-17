import { Content, Header, Page } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';

export const TrainingPage = () => {
    return (
        <Page themeId="training">
            <Header title="Training">
            </Header>
            <Content>
                <Grid container justifyContent='flex-end'>
                    <Grid item md={12} xs={4}>
                        <iframe src='http://localhost:3000/docs?filters%5Buser%5D=all' width={1000} height={800}></iframe>
                    </Grid>
                <Grid> aa</Grid>
                </Grid>
            </Content>
        </Page>
    );
};
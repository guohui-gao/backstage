import {
    ClockConfig,
    CustomHomepageGrid,
    HeaderWorldClock,
    HomePageCompanyLogo,
    HomePageRandomJoke,
    HomePageStarredEntities,
    HomePageToolkit,
    //HomePageTopVisited,
    HomePageRecentlyVisited,
    WelcomeTitle,
} from '@backstage/plugin-home';
import { CatalogIcon, Content, Header, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import React from 'react';
import JenkinsIcon from './icons/JenkinsIcon'
import OpenShiftIcon from './icons/OpenShiftIcon'
import JiraIcon from './icons/JiraIcon';
import ArgoIcon from './icons/ArgoIcon';
import GitHubIcon from './icons/GitHubIcon';
// announcements
import { AnnouncementsCard } from '@k-phoen/backstage-plugin-announcements';



const clockConfigs: ClockConfig[] = [
    {
        label: 'PST',
        timeZone: 'America/Los_Angeles',
    },
    {
        label: 'EST',
        timeZone: 'America/New_York',
    },
    {
        label: 'IST',
        timeZone: 'Asia/Calcutta',
    },
    {
        label: 'CST',
        timeZone: 'Asia/Shanghai',
    },

];

const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
};

// const welcomeLanguages =[""]
// Show welcome message with a random language from the list.
const welcomeLanguages = ["English", "Spanish", "French", "Chinese"]

const defaultConfig = [
    {
        component: 'HomePageSearchBar',
        x: 0,
        y: 2,
        width: 12,
        height: 2,
        movable: false,
        resizable: false,
        deletable: false,
    },
    {
        component: 'HomePageStarredEntities',
        x: 0,
        y: 10,
        width: 6,
        height: 5,
    },
    {
        component: 'HomePageToolkit',
        x: 6,
        y: 10,
        width: 6,
        height: 5,
    },
    {
        component: 'HomePageRecentlyVisited',
        x: 0,
        y: 2,
        width: 6,
        height: 5,
    },
    {
        component: 'AnnouncementsCard',
        x: 6,
        y: 2,
        width: 6,
        height: 5,
    },
];

export const HomePage = () => {
    return (
        <Page themeId="home">
            <Header title={<WelcomeTitle language={welcomeLanguages} />} pageTitleOverride="Home" >
                <HomePageCompanyLogo logo="TimeZones" className='company' />
                <HeaderWorldClock
                    clockConfigs={clockConfigs}
                    customTimeFormat={timeFormat}
                />
            </Header>
            <Content>
                <CustomHomepageGrid config={defaultConfig}>
                    <AnnouncementsCard max={3} />
                    <HomePageSearchBar />
                    <HomePageStarredEntities title='Starred Entities' />
                    <HomePageRecentlyVisited numVisitsOpen={5} numVisitsTotal={10} />
                    <HomePageRandomJoke />
                    <HomePageToolkit
                        title="Tools"
                        tools={[
                            { label: 'Catalog', icon: <CatalogIcon />, url: 'catalog' },
                            { label: 'Argo', icon: <ArgoIcon />, url: 'https://argourl' },
                            { label: 'Jira', icon: <JiraIcon />, url: 'https://jiraurl' },
                            { label: 'Github', icon: <GitHubIcon />, url: 'https://githuburl' },
                            { label: 'Jenkins', icon: <JenkinsIcon />, url: 'https://jenkinsurl' },
                            { label: 'OpenShift', icon: <OpenShiftIcon />, url: 'https://openshifturl' },
                        ]}></HomePageToolkit>
                </CustomHomepageGrid>
            </Content>
        </Page>
    );
};
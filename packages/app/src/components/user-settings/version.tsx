import React from 'react';
import { InfoCard } from "@backstage/core-components";
import { useApi, configApiRef } from '@backstage/core-plugin-api';

//import featureFlagsApiRef from '@backstage/core-plugin-api';
//const featureFlagsApi = useApi(featureFlagsApiRef);
//const isOn = featureFlagsApi.isActive('show-example-feature');

const VersionSettings = () =>
{
    const config = useApi(configApiRef);
    return (<InfoCard>
        <InfoCard>Branch: { config.getString('app.versionBranch') }</InfoCard>
        <InfoCard>SHA-1: { config.getString('app.versionCommit') }</InfoCard>
        </InfoCard>
    )
};

export { VersionSettings };
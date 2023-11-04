import React from 'react';
import { useParams } from 'react-router-dom';
import WorkSapce from '../modules/WorkSpace';

interface RouteParams {
    name: string;
}

const WorkSpaceWarpper: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    console.log(name)
    return <WorkSapce workspaceName={name} />;
};

export default WorkSpaceWarpper;

import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbProps {
    title: string;
}

export const Breadcrumb : React.FC<BreadcrumbProps> = ({ title }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link href='/'>
                <HomeIcon className='home-icon' fontSize="small" color="primary" />
            </Link>
            <Typography color="text.primary">{ title }</Typography>
        </Breadcrumbs>
    )
}
import React from 'react';
import {Link} from 'react-router-dom';
import NavigationSidebar from './NavigationSidebar';
import WhoToFollowList from './WhoToFollowList/WhoToFollowList';
import PostSummaryList from './PostSummaryList/PostSummaryList';

const Tuiter = () => {
    return(
        <>
        <h1>Tuiter</h1>
        <Link  to="/hello">Hello</Link> | <Link to="/">Labs</Link>
        <NavigationSidebar active='home'/>
        <PostSummaryList />
        <WhoToFollowList />
        </>
    )
};

export default Tuiter;
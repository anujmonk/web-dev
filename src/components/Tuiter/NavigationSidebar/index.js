import React from "react";
import './navigation.css';

const NavigationSidebar = ({ active = 'explore' }) => {
    return ( 
        <>
            <div className="list-group">
                <a className="list-group-item bg-dark" href="/">
                    <i className="fab fa-twitter text-white"></i></a>
                <a href="../HomeScreen/homescreen.html" className={`list-group-item bg-dark ${active === 'home' ? 'active' : ''}`}><i
                    className="fa fa-home text-white"></i><span
                        className="d-none d-xl-inline-block wd-padding-left-side text-white"> Home</span></a>
                 <a href="../ExploreScreen/explore.html" aria-current="true" className={`list-group-item bg-dark ${active === 'explore' ? 'active' : ''}`}><i     
                className="fa fa-solid fa-hashtag text-white"></i><span
                    className="d-none d-xl-inline-block wd-padding-left-side text-white"> Explore</span></a>
                <a href="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-bell text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Notifications</span></a>
                <a href="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-envelope text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Messages</span></a>
                <a href="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-bookmark text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Bookmarks</span></a>
             <a href="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-list text-white"></i><span
                    className="d-none d-xl-inline-block wd-padding-left-side text-white"> Lists</span>
            </a>
            <a href="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-user text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Profile</span></a>
            <a href="" className="wd-padding-left list-group-item list-group-item-action bg-dark"><span
                className="fa-stack fa-1x wd-margin-more-negative text-white">
                <i className="fas fa-circle fa-stack-1x wd-more-size text-white"></i>
                <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
            </span> <span className="d-none d-xl-inline-block text-white"> More</span></a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    </>
    );
}
export default NavigationSidebar;

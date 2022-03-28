import React from "react";
import './navigation.css';
import '../../../vendors/fontawesome/css/all.min.css'
import {Link} from "react-router-dom";

const NavigationSidebar = ({ active}) => {
    return ( 
        <>
            <div className="list-group">
                <Link className="list-group-item bg-dark" to="/">
                    <i className="fab fa-twitter text-white"></i></Link>
                <Link to="/tuiter/" className={`list-group-item bg-dark ${active === 'home' ? 'active' : ''}`}><i
                    className="fa fa-home text-white"></i><span
                        className="d-none d-xl-inline-block wd-padding-left-side text-white"> Home</span></Link>
                 <Link to="/tuiter/explore" aria-current="true" className={`list-group-item bg-dark ${active === 'explore' ? 'active' : ''}`}><i     
                className="fa fa-solid fa-hashtag text-white"></i><span
                    className="d-none d-xl-inline-block wd-padding-left-side text-white"> Explore</span></Link>
                <Link to="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-bell text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Notifications</span></Link>
                <Link to="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-envelope text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Messages</span></Link>
                <Link to="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-bookmark text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Bookmarks</span></Link>
             <Link to="" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-list text-white"></i><span
                    className="d-none d-xl-inline-block wd-padding-left-side text-white"> Lists</span>
            </Link>
            <Link to="/tuiter/profile" className="list-group-item list-group-item-action bg-dark"><i
                className="fa fa-solid fa-user text-white"></i>
                <span className="d-none d-xl-inline-block wd-padding-left-side text-white"> Profile</span></Link>
            <Link to="" className="list-group-item list-group-item-action bg-dark"><span
                className="wd-padding-left fa-stack fa-1x wd-margin-more-negative text-white">
                <i className="fas fa-circle fa-stack-1x wd-more-size text-white"></i>
                <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
            </span> <span className="d-none d-xl-inline-block text-white"> More</span></Link>
            </div>
            <div className="d-grid mt-2">
                <Link to="tweet.html"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
            </div>
    </>
    );
}
export default NavigationSidebar;

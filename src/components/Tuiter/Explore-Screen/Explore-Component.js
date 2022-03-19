import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import './explore.css';

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                      
                <div className="wd-input-icons">
                    <i className="fa fa-search wd-search-icon" aria-hidden="true"></i>
                    <input className="wd-input-field rounded-pill wd-search-bar-width wd-search-clr wd-mr" type="text" placeholder="Search"></input>
                    <i className="fa fa-cog wd-setting-icon text-white" aria-hidden="true"></i>
                </div>
           </div>
           
           
                      <ul className="nav nav-pills d-flex py-1">
                        <li className="nav-item">
                            <a className="nav-link active" href="for-you.html">For You</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="sports.html">Sports</a>
                        </li>
                        <li className="nav-item d-none d-md-inline-block">
                            <a className="nav-link text-white" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
           
          
           <div>

                    
                        <div className="card px-0">

                            
                            <img className="card-img-top wd-container" src="/images/starship.jpeg" width="100%" alt=""></img>
                    
                            
                            <div className="card-body wd-bottom-left text-white">
                                <strong>SpaceX's Starship</strong>
                            </div>
                    
                          </div>
           <PostSummaryList />
           </div>
        </>
    );
}
export default ExploreComponent;

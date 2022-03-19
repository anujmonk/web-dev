import NavigationSidebar from "../NavigationSidebar/";
import ExploreComponent from "./Explore-Component";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList";
import React from "react";
 
const active='explore';
const ExploreScreen = () => {
    return (
        <>
        <div class="row mt-2">
        <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active={active} />
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-7 col-xxl-7   px-0">
                <ExploreComponent />
            </div>
            <div class="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-3">
                <WhoToFollowList />
            </div>
        </div>
        </>
    );
}
export default ExploreScreen;

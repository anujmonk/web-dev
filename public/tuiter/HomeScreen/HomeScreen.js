import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostItems from "../PostList/PostItems.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row">
        <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-2 col-xxl-2 mt-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-11 col-sm-11 col-md-11 col-lg-8 col-xl-7 col-xxl-7 mt-2">
                ${PostItems()}
            </div>
            <div class="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-3 mt-2">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
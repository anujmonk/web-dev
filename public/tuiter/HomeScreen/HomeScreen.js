import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostItems from "../PostList/PostItems.js";


(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 px-0">
                ${PostItems()}
            </div>
        </div>
    `);
})($);
import NavigationSidebar from "../../NavigationSidebar/NavigationSidebar.js";
import PostSummaryList from "../../PostSummaryList/PostSummaryList.js";


(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-10 col-xxl-10 wd-border px-0">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
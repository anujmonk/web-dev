const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item bg-dark" href="/">
                    <i class="fab fa-twitter text-white"></i></a>
                    <a href="" class="list-group-item list-group-item-action bg-dark"><i
                            class="fa fa-home text-white"></i><span
                            class="d-none d-xl-inline-block wd-padding-left-side text-white">Home</span></a>
                    <a href="" class="list-group-item list-group-item-action bg-dark" aria-current="true"><i
                            class="fa fa-solid fa-hashtag text-white"></i><span
                            class="d-none d-xl-inline-block wd-padding-left-side text-white">Explore</span></a>
                    <a href="" class="list-group-item list-group-item-action bg-dark"><i
                            class="fa fa-solid fa-bell text-white"></i>
                        <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Notifications</span></a>
                    <a href="" class="list-group-item list-group-item-action bg-dark"><i
                            class="fa fa-solid fa-envelope text-white"></i>
                        <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Messages</span></a>
                    <a href="" class="list-group-item list-group-item-action bg-dark"><i
                            class="fa fa-solid fa-bookmark text-white"></i>
                        <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Bookmarks</span></a>
                    <a href="" class="list-group-item list-group-item-action bg-dark"><i
                           class="fa fa-solid fa-list text-white"></i><span
                            class="d-none d-xl-inline-block wd-padding-left-side text-white">Lists</span>
                    </a>
                    <a href="" class="list-group-item list-group-item-action bg-dark"><i
                            class="fa fa-solid fa-user text-white"></i>
                        <span class="d-none d-xl-inline-block wd-padding-left-side text-white">Profile</span></a>
                    <a href="" class="wd-padding-left list-group-item list-group-item-action bg-dark"><span
                            class="fa-stack fa-1x wd-margin-more-negative text-white">
                            <i class="fas fa-circle fa-stack-1x wd-more-size text-white"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
                        </span> <span class="d-none d-xl-inline-block text-white">More</span></a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

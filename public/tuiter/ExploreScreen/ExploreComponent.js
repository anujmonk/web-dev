import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="wd-input-icons">
                    <i class="fa fa-search wd-search-icon" aria-hidden="true"></i>
                    <input class="wd-input-field rounded-pill wd-search-bar-width wd-search-clr wd-mr" type="text" placeholder="Search">
                    <i class="fa fa-cog wd-setting-icon text-white" aria-hidden="true"></i>
                </div>
           </div>
           
           
                      <ul class="nav nav-pills d-flex justify-content-around bg-dark">
                        <li class="nav-item wd-border-link">
                            <a class="nav-link text-white" href="for-you.html">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item d-none d-md-inline-block">
                            <a class="nav-link text-white" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
           
           <!-- image with overlaid text -->
           <div>

                    
                        <div class="card px-0">

                            
                            <img class="card-img-top wd-container" src="../starship.jpeg" width="100%">
                    
                            
                            <div class="card-body wd-bottom-left text-white">
                                <strong>SpaceX's Starship</strong>
                            </div>
                    
                          </div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;

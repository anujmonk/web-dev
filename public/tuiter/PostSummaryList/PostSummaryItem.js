const PostSummaryItem = (post) => {
    return(
        `
        <div class="row">
            <div class="col-11 d-flex flex-column">
                
                    <small class="text-muted">${post.topic}</small>
                
                <ul class="list-inline">
                    
                        <li class="list-inline-item text-white"><strong>${post.userName}</strong></li>
                    
                    <li class="list-inline-item text-white"><i class="fa fa-check-circle"></i></li>
                    <li class="list-inline-item"><small class="text-muted">- ${post.time}</small></li>
                </ul>
                
                    <span class="text-white"><strong>${post.title}</strong></span>
                
                    
                    <small class="text-muted">${post.tweets===undefined?'':post.tweets} ${post.tweets===undefined?'':'Tweets'}</small>
                
            </div>
            <div class="col-1">
                <img class="wd-image-icon wd-margin-mid" src="${post.image}">
            </div>
        </div>
    `
    );
}
export default PostSummaryItem;
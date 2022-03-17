const PostSummaryItem = ({post}) => {
    return(
        <>
        <span className="list-group-item bg-dark">
        <div className="row">
            <div className="col-10 d-flex flex-column">
                
                    <small className="text-muted">{post.topic}</small>
                
                <ul className="list-inline">
                    
                        <li className="list-inline-item text-white"><strong>{post.userName}</strong></li>
                    
                    <li className="list-inline-item text-white"><i className="fa fa-check-circle"></i></li>
                    <li className="list-inline-item"><small className="text-muted">- {post.time}</small></li>
                </ul>
                
                    <span className="text-white"><strong>{post.title}</strong></span>
                
                    
                    <small className="text-muted">{post.tweets===undefined?'':post.tweets} {post.tweets===undefined?'':'Tweets'}</small>
                
            </div>
            <div className="col-2">
                <img className="wd-image-icon wd-margin-mid" alt="" src={post.image}/>
            </div>
        </div>
        </span>
    </>
    );
}
export default PostSummaryItem;
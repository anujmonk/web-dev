import React from "react";
import { useDispatch } from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
      };
    
    return(
        <>
        <div className="row">
                        <div className="col-3">
                            <i className="fa fa-light fa-comment"></i>
                            <span className="text-muted"> {tuit.stats.comments}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-solid fa-retweet"></i>
                            <span className="text-muted"> {tuit.stats.retuits}</span>
                        </div>
                        <div className="col-3"> 
                            <span onClick={likeTuit}>
                                {
                                tuit.liked &&
                                <i className="fas fa-heart me-1"
                                    style={{color: 'red'}}></i>
                                }
                                {
                                !tuit.liked &&
                                <i className="far fa-heart me-1"></i>
                                }
                                {tuit.stats && tuit.stats.likes}
                                </span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-solid fa-upload"></i>
                        </div>
        </div>
        </>       
    );
};
export default TuitStats;
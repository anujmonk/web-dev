import React from "react";
import { useDispatch } from "react-redux";
import {updateTuit} from "../actions/tuits-actions.js";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
      };
      
    return(
        <>
        <div className="row">
                        <div className="col">
                            <i className="fa fa-light fa-comment"></i>
                            <span className="text-muted"> {tuit.stats.comments}</span>
                        </div>
                        <div className="col">
                            <i className="fa fa-solid fa-retweet"></i>
                            <span className="text-muted"> {tuit.stats.retuits}</span>
                        </div>
                        <div className="col"> 
                            <span onClick={likeTuit}>
                                {
                                
                                <i onClick={() => {
                                    const nTuit = tuit;
                                    nTuit.stats.likes++;
                                    updateTuit(dispatch,nTuit
                                    )} } className="far fa-thumbs-up ms-2"></i>
                                }
                            
                                
                                {tuit.stats && tuit.stats.likes}
                            
                                </span>
                        </div>
                        <div className="col"> 
                            <span onClick={likeTuit}>
                                {
                                
                                <i onClick={() => {
                                    const nTuit = tuit;
                                    nTuit.stats.dislikes--;
                                    updateTuit(dispatch,nTuit
                                    )} } className="far fa-thumbs-down ms-2"></i>
                                }
                                {tuit.stats && tuit.stats.dislikes}
                            
                                </span>
                        </div>
                        <div className="col">
                            <i className="fa fa-solid fa-upload"></i>
                        </div>
        </div>
        </>       
    );
};
export default TuitStats;
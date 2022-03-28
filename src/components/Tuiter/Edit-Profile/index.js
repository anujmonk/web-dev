import React from "react";
import { useSelector } from "react-redux";
import "./edit.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile[0]);
    const name = profile.firstName.concat(" ").concat(profile.lastName);
    return (
    <>
        <div>
                <div className="row mb-2">
                    <div className="col-1">
                        <Link to="/tuiter/profile"><span className="text-white"><i class="fa fa-solid fa-window-close"></i></span></Link>
                    </div>
                    <div className="col-11">
                    <span className="text-white"> <strong className="text-white">Edit Profile</strong></span>
                    <Link to="/tuiter/profile"><button type="button" class="btn btn-light btn-sm float-end wd-button-save">Save</button></Link>
                    </div>
                    
                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} className="wd-bannerPicture" alt="" ></img>
            </div>
            <div className="mt-2">
                <img src={profile.profilePicture} className="wd-profilePicture" alt=""></img>
            </div>
            <div className="wd-div">
                <label for="name">Name</label><br/>
                <input id="name" type="text" className="form-control wd-input" defaultValue={name}></input>
            </div>
            <div className="wd-div">
                <label for="">Bio</label><br/>
                <textarea className="form-control wd-input" defaultValue={profile.bio}></textarea>
            </div>
            <div className="wd-div">
                <label for="">Location</label><br/>
                <input type="text" className="form-control wd-input" defaultValue={profile.location}></input>
            </div>
            <div className="wd-div">
                <label for="">Date of Birth</label><br/>
                <input type="date" className="form-control wd-input" ></input>
            </div>
            <div className="wd-div">
                <label for="">Website</label><br/>
                <input type="text" className="form-control wd-input" defaultValue={profile.website}></input>
            </div>
    </>
    );
};
export default EditProfile;
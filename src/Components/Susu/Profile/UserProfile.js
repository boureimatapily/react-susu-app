import React from "react";
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";
// import { addDays, addDaysUpdate } from "../../../Redux/Actions/UserActions";
//import pencil from "../../../Images/icons/pencil.svg";
import envelope from "../../../Images/icons/envelope-fill.svg";
import person from "../../../Images/icons/person-fill.svg";
import geo from "../../../Images/icons/geo-alt.svg";

class UserProfile extends React.Component {
  render() {
    const { uid, profile } = this.props;
    if (!uid) return <Redirect to="/login" />;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div>
              <h5 className="profileIconText"><img src={envelope} alt="email" className="profileIcon" /> {profile.email} </h5>
              <h5 className="profileIconText"><img src={person} alt="user" className="profileIcon" />  {profile.fullname} </h5>
              <h5 className="profileIconText"><img src={geo} alt="adresse" className="profileIcon" />  {profile.address} </h5>
            </div>
            {/* <div className="doctorActionButton">
              <Link to={"editsingledoctor/" + uid}>
                <button type="button" className="btn btn-secondary btnaction">
                  <img
                    src={pencil}
                    alt="pencil"
                    id="pencil"
                    width="20"
                    height="20"
                    title="delete"
                  />
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  const profile = state.firebase.profile;
  return {
    uid: uid,
    profile: profile,
  };
};

export default connect(mStp)(UserProfile);

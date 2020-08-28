import React, { Component } from "react";
import AddGroup from "./AddGroup";
import SusuList from "./SusuList";
import { connect } from "react-redux";

class Susu extends Component {
    
  render() {
   
    return (
      <div className="container">
        <div className="row">
            <div className="col">
                <AddGroup />
            </div>
        </div>
        <div className="row">
            <div className="col">
            <SusuList  />
            </div>
        </div>
      </div>
    );
  }
}
const mStp = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    // const profile = state.firebase.profile;
    return {
      uid: uid,
      //   profile: profile,
    };
  };
  
  export default connect(mStp)(Susu);

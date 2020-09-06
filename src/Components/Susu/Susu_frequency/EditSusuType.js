import React from "react";
import { connect } from "react-redux";
import AddPayment from "../Susu_Payment/AddPayment";
import SusuPaymentList from "../Susu_Payment/SusuPaymentList";

class EditSusuType extends React.Component {

  
  render() {
    const groupId = this.props.match.params.id;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6  offset-md-3 col-lg-6  offset-lg-3 col-xl-6  offset-xl-3 col-xxl-6  offset-xxl-3">
            <AddPayment  groupId={groupId} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6  offset-md-3 col-lg-6  offset-lg-3 col-xl-6  offset-xl-3 col-xxl-6  offset-xxl-3">
            <SusuPaymentList groupId={groupId} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(EditSusuType);

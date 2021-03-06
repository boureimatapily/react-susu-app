import React from "react";
import trash from "../../Images/icons/x-circle.svg";
import pencil from "../../Images/icons/pencil.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGroup } from "../../Redux/Actions/UserActions";

const SusuItem = ({ susu, deleteGroup }) => {
  const handleRemove = (susu) => {
    deleteGroup(susu);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card cardSize text-center">
            <div className="card-body">
              <div className="doctorActionButton">
                <button
                  type="button"
                  className="btn btn-danger btnactiondelete d-flex justify-content-center align-items-center"
                >
                  {" "}
                  <img
                    src={trash}
                    alt="trash"
                    id="trash"
                    width="30"
                    height="30"
                    title="delete"
                    onClick={() => handleRemove(susu)}
                  />{" "}
                </button>
              </div>
              <h6 className="card-title">Groupe Name </h6>
              <h4 className="card-subtitle mb-2 text-muted">
                {" "}
                {susu.groupName}{" "}
              </h4>
              <div className="card-text"></div>
              <div className="doctorActionButton">
                <Link to={"/editgroup/" + susu.id}>
                  <button
                    type="button"
                    className="btn btn-secondary btnaddpayment"
                  >
                    <img
                      src={pencil}
                      alt="pencil"
                      id="pencil"
                      width="15"
                      height="15"
                      title="delete"
                    />{" "}
                    ADD PAYMENTS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, { deleteGroup })(SusuItem);

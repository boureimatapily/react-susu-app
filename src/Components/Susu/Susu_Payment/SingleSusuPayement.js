import React from "react";
import trash from "../../../Images/icons/trash-fill.svg";
import { connect } from "react-redux";
import { deleteSusuPayement } from "../../../Redux/Actions/UserActions";

function SingleSusuPayement({ payment, deleteSusuPayement }) {
  const handleRemove = (payment) => {
    deleteSusuPayement(payment);
  };

  return (
    <>
      <tr>
        {/* <th> {moment(patient.date).calendar()} </th> */}
        {/* <th> {payment.date}</th> */}
        <th> {payment.fullname}</th>
        <th> {payment.amount}</th>
        <th>
          <button type="button" className="btn btn-danger btnaction">
            {" "}
            <img
              src={trash}
              alt="trash"
              id="trash"
              width="20"
              height="20"
              title="delete"
              onClick={() => handleRemove(payment)}
            />{" "}
          </button>
          {/* <Link to={"/singlesusu/" + payment.id}>
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
          </Link> */}
        </th>
      </tr>
    </>
  );
}
export default connect(null, { deleteSusuPayement })(SingleSusuPayement);

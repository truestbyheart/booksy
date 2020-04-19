import React from "react";
import Skeleton from "react-loading-skeleton";

function skeloton() {
  return (
    <div className="mt-4 col-md-3 col-sm-6 col-xs-6">
      <div className="card">
        <Skeleton height={150} width={"100%"} duration={2} />
        <div className="card-body">
          <h6 className="text-nowrap text-truncate">
            <Skeleton />
          </h6>
          <div className="row">
            <Skeleton duration={2} />
          </div>
          <small>
            <Skeleton duration={2} />{" "}
          </small>
        </div>
      </div>
    </div>
  );
}

export default skeloton;

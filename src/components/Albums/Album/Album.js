import React from "react";
import { Card } from "react-bootstrap";
import "../Album/Album.css";
import { Link } from "react-router-dom";

const Album = (props) => {
  return (
    <Link to={props.detail}>
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <Card>
          <img src={props.img} alt={props.titulo} />
          <h4>{props.titulo}</h4>
          <p>{props.año}</p>
        </Card>
      </div>
    </Link>
  );
};

export default Album;

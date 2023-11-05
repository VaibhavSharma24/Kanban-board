import React from "react";
import Avatar from "./Avatar";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {MoreHorizontal,Plus} from "react-feather";

function Card(props) {
  return (
    <div className="board">
    <div className="board_top">
    <p className="board_top_title">To do</p>
                <Plus />
                <MoreHorizontal />
            </div>
    <div className="board_cards">
    <div className="card">
        <Avatar img={props.img} />
        <h3>{props.name}</h3>
        <h2>{props.heading}</h2>
        <div className="feature-request"><FiberManualRecordIcon />Feature request</div>
    </div>
    </div>
    <div className="card">
        <Avatar img={props.img} />
        <h3>{props.name}</h3>
        <h2>{props.heading}</h2>
        <div className="feature-request"><FiberManualRecordIcon />Feature request</div>
    </div>
    </div>
  );
}

export default Card;
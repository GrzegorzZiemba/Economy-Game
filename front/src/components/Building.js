import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { upgradeBuilding } from "../store/actions/gameActions";

const Building = ({
  buildingName,
  level,
  buildTime,
  isBuild,
  stone,
  wood,
  ironOre,
  production = 0,
  capacity = 0,
  defence = 0,
  canons = 0,
}) => {
  const userId = localStorage.getItem("userId");
  const userToken = localStorage.getItem("userInfo");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          {" "}
          {buildingName}Level: {level}
        </Card.Title>
        <Card.Text>
          You need {buildTime / 60} minutes to upgrade. You need {wood} woods to
          upgrade. You need {ironOre} ironOre to upgrade. You need {stone}{" "}
          stones to upgrade.
          {production > 0 ? <h2> You Produce {production} </h2> : ""}
          {capacity > 0 ? (
            <h2> Your warehouse capacity is right now {capacity} </h2>
          ) : (
            ""
          )}
          {defence > 0 ? <h2> your defence is at level {defence} </h2> : ""}
          {canons > 0 ? <h2> you've got {canons} </h2> : ""}
        </Card.Text>
        {!isBuild ? (
          <Button
            variant="primary"
            onClick={() => {
              dispatch(upgradeBuilding(userId, userToken, buildingName));
              navigate("/trading");
            }}
          >
            Build
          </Button>
        ) : (
          <h2>Building</h2>
        )}
      </Card.Body>
    </Card>
  );
};

export default Building;

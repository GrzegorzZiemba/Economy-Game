import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrader } from "../store/actions/gameActions";
import { Card, Button } from "react-bootstrap";

const TradePage = () => {
  const dispatch = useDispatch();

  const userId = localStorage.getItem("userId");
  console.log(userId);
  console.log(localStorage.getItem("userInfo"));
  const { trader } = useSelector((state) => state.trader);
  console.log(trader);
  console.log(trader?.goldMine?._doc);
  useEffect(() => {
    dispatch(getTrader(localStorage.getItem("userInfo")));
  }, []);
  return (
    <>
      {userId !== "" ? (
        <>
          <ul>
            <li> {trader.money} Money </li>
            <li> {trader.wood} Wood</li>
            <li> {trader.stone} Stone</li>
            <li> {trader.gold} Gold </li>
            <li> {trader.iron} Iron </li>
          </ul>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>
                {" "}
                Gold Mine Level: {trader?.goldMine?._doc?.level}
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>
                {" "}
                StoneMine Level: {trader?.stoneMine?._doc?.level}
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>
                {" "}
                StoneMine Level: {trader?.ironMine?._doc?.level}
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>{userId} ??</>
      )}
    </>
  );
};

export default TradePage;

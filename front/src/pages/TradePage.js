import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrader } from "../store/actions/gameActions";

const TradePage = () => {
  const dispatch = useDispatch();

  const userId = localStorage.getItem("userId");
  console.log(userId);
  console.log(localStorage.getItem("userInfo"));
  const { trader } = useSelector((state) => state.trader);
  console.log(trader);
  useEffect(() => {
    dispatch(getTrader(localStorage.getItem("userInfo")));
  }, []);
  return (
    <>
      {userId !== "" ? (
        <ul>
          <li> {trader.money} Money </li>
          <li> {trader.wood} Wood</li>
          <li> {trader.stone} Stone</li>
          <li> {trader.gold} Gold </li>
          <li> {trader.iron} Iron </li>
        </ul>
      ) : (
        <>{userId} ??</>
      )}
    </>
  );
};

export default TradePage;

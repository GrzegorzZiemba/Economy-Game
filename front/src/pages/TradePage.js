import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrader } from "../store/actions/gameActions";
import Building from "../components/Building";

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
        <>
          <ul>
            <li> {trader.money} Money </li>
            <li> {trader.wood} Wood</li>
            <li> {trader.stone} Stone</li>
            <li> {trader.gold} Gold </li>
            <li> {trader.iron} Iron </li>
          </ul>
          <Building
            buildingName="Gold Mine"
            level={trader?.goldMine?._doc.level}
            buildTime={trader?.goldMine?._doc.buildTime}
            isBuild={trader?.goldMine?._doc.building}
            stone={trader?.goldMine?._doc.stone}
            wood={trader?.goldMine?._doc.wood}
            ironOre={trader?.goldMine?._doc.ironOre}
            production={trader?.goldMine?._doc.production}
          />
          <Building
            buildingName="Iron Mine"
            level={trader?.iornMine?._doc.level}
            buildTime={trader?.iornMine?._doc.buildTime}
            isBuild={trader?.iornMine?._doc.building}
            stone={trader?.iornMine?._doc.stone}
            wood={trader?.iornMine?._doc.wood}
            ironOre={trader?.iornMine?._doc.ironOre}
            production={trader?.iornMine?._doc.production}
          />
          <Building
            buildingName="Sawmill"
            level={trader?.sawmill?._doc.level}
            buildTime={trader?.sawmill?._doc.buildTime}
            isBuild={trader?.sawmill?._doc.building}
            stone={trader?.sawmill?._doc.stone}
            wood={trader?.sawmill?._doc.wood}
            ironOre={trader?.sawmill?._doc.ironOre}
            production={trader?.sawmill?._doc.production}
          />
          <Building
            buildingName="Silver Mine"
            level={trader?.silverMine?._doc.level}
            buildTime={trader?.silverMine?._doc.buildTime}
            isBuild={trader?.silverMine?._doc.building}
            stone={trader?.silverMine?._doc.stone}
            wood={trader?.silverMine?._doc.wood}
            ironOre={trader?.silverMine?._doc.ironOre}
            production={trader?.silverMine?._doc.production}
          />
          <Building
            buildingName="Stone Mine"
            level={trader?.stoneMine?._doc.level}
            buildTime={trader?.stoneMine?._doc.buildTime}
            isBuild={trader?.stoneMine?._doc.building}
            stone={trader?.stoneMine?._doc.stone}
            wood={trader?.stoneMine?._doc.wood}
            ironOre={trader?.stoneMine?._doc.ironOre}
            production={trader?.stoneMine?._doc.production}
          />
          <Building
            buildingName="Woodcutter"
            level={trader?.woodcutter?._doc.level}
            buildTime={trader?.woodcutter?._doc.buildTime}
            isBuild={trader?.woodcutter?._doc.building}
            stone={trader?.woodcutter?._doc.stone}
            wood={trader?.woodcutter?._doc.wood}
            ironOre={trader?.woodcutter?._doc.ironOre}
            production={trader?.woodcutter?._doc.production}
          />
          <Building
            buildingName="Walls"
            level={trader?.walls?._doc.level}
            buildTime={trader?.walls?._doc.buildTime}
            isBuild={trader?.walls?._doc.building}
            stone={trader?.walls?._doc.stone}
            wood={trader?.walls?._doc.wood}
            ironOre={trader?.walls?._doc.ironOre}
            canons={trader?.walls?._doc.canons}
            defence={trader?.walls?._doc.defence}
          />
          <Building
            buildingName="Warehouse"
            level={trader?.warehouse?._doc.level}
            buildTime={trader?.warehouse?._doc.buildTime}
            isBuild={trader?.warehouse?._doc.building}
            stone={trader?.warehouse?._doc.stone}
            wood={trader?.warehouse?._doc.wood}
            ironOre={trader?.warehouse?._doc.ironOre}
            capacity={trader?.warehouse?._doc.capacity}
          />
          <Building
            buildingName="house"
            level={trader?.house?._doc.level}
            buildTime={trader?.house?._doc.buildTime}
            isBuild={trader?.house?._doc.building}
            stone={trader?.house?._doc.stone}
            wood={trader?.house?._doc.wood}
            ironOre={trader?.house?._doc.ironOre}
            capacity={trader?.house?._doc.capacity}
          />
        </>
      ) : (
        <>{userId} ??</>
      )}
    </>
  );
};

export default TradePage;

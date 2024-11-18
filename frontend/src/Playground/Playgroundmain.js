import Style from "./playgroundmain.css";
import { useState } from "react";
import Navbar from "../component/navbar";
import Dashboard from "./Dashboard/Dashboard";
import Leftnav from "./Leftnav/Leftnav";
import Items from "./Items/items";
function PlaygroundMain() {
  const [dashboard, setdashboard] = useState(false);
  const [items, setitems] = useState(false);
  const dashboardon = (data) => {
    setdashboard(data);
    if (data) setitems(false);
  };
  const itemsdatas = (data) => {
    setitems(data);
    if (data) setdashboard(false);
  };
  return (
    <>
      <Navbar />
      <div className="maincontainer">
        <Leftnav setdata={dashboardon} setitem={itemsdatas} />
        <dash className="mainplayground">{dashboard && <Dashboard />}</dash>
      </div>
      <item className="itemplayground">{items && <Items />}</item>
    </>
  );
}

export default PlaygroundMain;

import { Link } from "react-router-dom";
import Styles from "./Leftnav.css";
import Svgimage from "./svg.js";
import { useState } from "react";
function Leftnav({ setdata, setitem }) {
  const [dashboardon, setdashboardon] = useState(true);
  const [itemsdatas, setitemsdatas] = useState(true);
  const dashboarddata = () => {
    setdata(dashboardon);
  };
  const itemsdata = () => {
    setitem(itemsdatas);
  };
  return (
    <>
      <leftnav>
        <ul>
          <li>
            <svgcontainer>
              {Svgimage.map((e) => {
                return (
                  <div className="svgcontent" key={e.svgCode}>
                    {e.svgUrl}
                  </div>
                );
              })}
            </svgcontainer>
            <Link to="#" onClick={dashboarddata}>
              Dashboard
            </Link>
            <Link to="#" onClick={itemsdata}>
              Items
            </Link>
            <Link to="#">business feasibility</Link>
            <Link to="#">Performance</Link>
            <Link to="#">Report</Link>
            <Link to="#">Service</Link>
          </li>
        </ul>
      </leftnav>
    </>
  );
}

export default Leftnav;

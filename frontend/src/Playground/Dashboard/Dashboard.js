import { data, options } from "./Mainchart";
import { Bar } from "react-chartjs-2";
import Style from "./Dashboard.css";
function Dashboard() {
  return (
    <>
      <div>
        <h1 className="labeldashboard">YOUR PERFORMANCE</h1>
        <Bar data={data} options={options} />;
      </div>
    </>
  );
}

export default Dashboard;

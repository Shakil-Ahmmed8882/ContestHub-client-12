import { Chart } from "react-google-charts";

export default function UserStatics({attempeted,wonContests}) {
  

  const data = [
    ["Paritcipation", "Number per contest"],
    ["Attempted", attempeted?attempeted:1],
    ["Completed",wonContests?wonContests:2]
  ];

  const options = {
    title: "Wining and participation statistics",
    is3D: true,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}
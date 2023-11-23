import Thead from "./Thead";
import TRow from "./TRow";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
      <Thead></Thead>
      {data.map((item, index) => <TRow key={index} item={item}></TRow>)}
      </table>
    </div>
  );
};

export default Table;

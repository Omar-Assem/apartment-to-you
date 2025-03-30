import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products";
import Filter from "../../Sides/Filter/Filter";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await axios.get("/Api/Data.json");
        setData(res.data);
        setFilteredData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllData();
  }, []);

  useEffect(() => {
    setPage(0);
  }, [filteredData]);

  const currentData = filteredData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <div className="container my-5">
      <Filter data={data} setFilteredData={setFilteredData} />
      <Products products={currentData} />
      {filteredData.length > 0 && (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            className="btn btn-primary"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <span className="align-self-center">
            Page {page + 1} from {Math.ceil(filteredData.length / itemsPerPage)}
          </span>
          <button
            className="btn btn-primary"
            disabled={(page + 1) * itemsPerPage >= filteredData.length}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

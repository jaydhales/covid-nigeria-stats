import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "./slices/statSlice";
import StateComponent from "./components/StateComponent.jsx";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);
  const stats = data.data;

  useEffect(() => {
    dispatch(getStats());
  }, []);

  if (loading) return <p>Loading....</p>;
  if (stats)
    return (
      <main>
        <h2>Cases Of Covid-19 in Nigeria</h2>
        <section>
          <p>
            Total Sample Tested: <span>{stats.totalSamplesTested}</span>
          </p>
          <p>
            Total Confirmed Cases: <span>{stats.totalConfirmedCases}</span>
          </p>
          <p>
            Total Active Cases: <span>{stats.totalActiveCases}</span>
          </p>
          <p>
            Discharged Patients: <span>{stats.discharged}</span>
          </p>
          <p>
            Total Death: <span>{stats.death}</span>
          </p>
        </section>

        <section>
          <h3>Statistics by State</h3>
          <StateComponent />
        </section>
      </main>
    );
};

export default App;

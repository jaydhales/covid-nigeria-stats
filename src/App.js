import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "./slices/statSlice";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);
  const stats = data.data;

  useEffect(() => {
    dispatch(getStats());
  }, []);

  console.log(stats);

  if (loading) return <p>Loading....</p>;
  return (
    <div>
      <p>Total Sample Tested: {stats.totalSamplesTested}</p>
    </div>
  );
};

export default App;

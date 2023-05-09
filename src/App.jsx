import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    testApi();
  }, []);
  const testApi = () => {
    fetchDataFromApi("/movie/popular").then((res) => console.log(res));
  };
  return (
    <>
      <div className="app"></div>
    </>
  );
}

export default App;

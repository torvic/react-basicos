import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

import ElectricMeterForm from "./ElectricMeterForm";
import ElectricMeterTable from "./ElectricMeterTable";
import Loader from "./Loader";
import Message from "./Message";

const ElectricMeterApi = () => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "http://127.0.0.1:8000/electric_meters/";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  return (
    <div>
      <h2>Medidores Electricos API</h2>
      <ElectricMeterForm />
      {loading && <Loader />}
      {error && <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />}
      {db && <ElectricMeterTable data={db} />}
    </div>
  );
};

export default ElectricMeterApi;

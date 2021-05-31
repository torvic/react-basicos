import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import ClientsTable from "./ClientsTable";

const ClientsApi = () => {
  const [db, setDb] = useState([]);

  let api = helpHttp();
  let url = "http://127.0.0.1:8000/clients/";

  useEffect(() => {
    api.get(url).then((res) => {
      //console.log(res);
      setDb(res);
    });
  }, [url]);

  return (
    <div>
      <h2>Clients API</h2>
      <ClientsTable data={db} />
    </div>
  );
};

export default ClientsApi;

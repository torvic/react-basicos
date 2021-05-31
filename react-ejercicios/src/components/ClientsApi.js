import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import ClientsForm from "./ClientsForm";
import ClientsTable from "./ClientsTable";
import Loader from "./Loader";
import Message from "./Message";

const ClientsApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://127.0.0.1:8000/clients/";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
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

  const createData = (data) => {
    // POST
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      console.log(res.err);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    // PUT
    let endpoint = `${url}${data.id}/`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      //console.log(res.err);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro eliminar el registro con el id ${id}?`
    );

    if (isDelete) {
      // DELETE
      let endpoint = `${url}${id}/`;

      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    }
  };

  return (
    <div>
      <h2>Clients API</h2>
      <ClientsForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />}
      {db && (
        <ClientsTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default ClientsApi;

import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

import ElectricMeterForm from "./ElectricMeterForm";
import ElectricMeterTable from "./ElectricMeterTable";
import Loader from "./Loader";
import Message from "./Message";

const ElectricMeterApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
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

  const createData = (data) => {
    // POST
    console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .post(url, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          // update table
          setDb([...db, res]);
        } else {
          setError(res);
        }
      });
  };

  const updateData = (data) => {
    // PUT
    let endpoint = `${url}${data.id}/`,
      options = {
        body: data,
        headers: { "content-type": "application/json" },
      };

    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } else {
          setError(res);
        }
      });
  };

  const deleteData = ({id, measurer}) => {
    let isDelete = window.confirm(
      `¿Estas seguro eliminar el medidor ${measurer}?`
    );

    if (isDelete) {
      // DELETE
      let endpoint = `${url}${id}/`,
        options = {
          headers: { "content-type": "application/json" },
        };
      helpHttp()
        .del(endpoint, options)
        .then((res) => {
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
      <h2>Medidores Electricos API</h2>
      <ElectricMeterForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />}
      {db && (
        <ElectricMeterTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default ElectricMeterApi;

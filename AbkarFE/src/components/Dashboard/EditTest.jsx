import { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import Table from "./Table";
import { MyTests } from "./services/MyTests";

function EditTest() {
  const { token } = useAuth();

  const [data, setData] = useState([]);
  const [render, setRender] = useState();

  const fetchData = async () => {
    const data = await MyTests(token);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [render]);

  const handleRender = (i) => {
    setRender(i);
  };
  return <Table data={data} handleRender={handleRender} />;
}

export default EditTest;

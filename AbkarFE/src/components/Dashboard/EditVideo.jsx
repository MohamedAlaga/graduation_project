import { useEffect, useState } from "react";
import Table from "./Table";
import { MyVideos } from "./services/MyVideos";
import { useAuth } from "../../AuthContext";

function Videos() {
  const { token } = useAuth();

  const [data, setData] = useState([]);
  const [render, setRender] = useState();

  const fetchData = async () => {
    const data = await MyVideos(token);
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

export default Videos;

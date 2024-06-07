import { useEffect, useState } from "react";
import Table from "./Table";
import { MyVideos } from "./services/MyVideos";
import { useAuth } from "../../AuthContext";

function Videos() {
  const { token } = useAuth();

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await MyVideos(token);
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Table data={data} />;
}

export default Videos;

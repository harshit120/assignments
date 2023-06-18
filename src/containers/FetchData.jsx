import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
const FetchData = () => {
  const [api, setapi] = useState({});
  const [ap, set] = useState(true);

  async function fetchD() {
    set(true);
    let url = "https://api.coinstats.app/public/v1/coins?skip=0";
    const d = await fetch(url);
    const data1 = await d.json();
    setapi(data1);
    set(false);
  }
  useEffect(() => {
    fetchD();
  }, []);

  var ans = api.coins;

  return <div>{ap ? <Spinner /> : <Card api={ans} />}</div>;
};

export default FetchData;

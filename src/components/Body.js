import ResCard from "./ResCard";
import { useState, useEffect } from "react";

import Shimmer from "./shimmerUi";
import { Link } from "react-router";
import useOnline from "../utils/Useonline";
const Body = () => {
  const [restaurants, setRes] = useState([]);
  const [restBack, setBackup] = useState([]);
  const [search, setSearch] = useState("");
  const onlineStatus=useOnline()

  console.log(restaurants);
  
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      setRes(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setBackup(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );

      console.log(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(! onlineStatus){
      return <h1>check your internet connection </h1>
  }

  return restBack.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="m-5 ">
      <div className="ps-6 bg-slate-200 shadow-lg">
        <input
          className="bg-slate-50  w-[400px] rounded-md border-solid  border border-black "

          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button
          className="ms-[-64px] mr-8 bg-slate-400 text-black-200 px-2 rounded-lg "
          onClick={() => {
            let result = restBack.filter((i) =>
              i.info.name.toLowerCase().includes(search)
            );
            setRes(result);
          }}
        >
          search
        </button>
        <button
         className="ms-8 mr-8 bg-green-200 text-black-200 px-2 rounded-lg"
          onClick={() => {
            let filterData = restaurants.filter((i) => i.info.avgRating > 4.3);
            setRes(filterData);
          }}
        >
          top Rated Restaurant's
        </button>

        <button
         className="ms-8 mr-8 bg-green-200 text-black-200 px-2 rounded-lg"
          onClick={() => {
            setRes(restBack);
          }}
        >
          clear filter
        </button>
      </div>

      <div className="flex flex-wrap ">
        {restaurants.map((res) => (
          <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
            <ResCard key={res.info.id} restaurant={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

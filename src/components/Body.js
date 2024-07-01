import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // stateful variable
  let [listOfResturants, setListOfResturants] = useState([]);
  let [filteredListOfResturants, setFilteredListOfResturants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // optional chaining
    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Or
  // const arr = useState(resList);
  // const listOfResturants = arr[0];
  // const setListOfResturants = arr[1];
  // if (listOfResturants.length === 0) {
  //   return <Shimmer />;
  // }
  if(onlineStatus === false) {
    return <h1> Look's like you are offline!! Please check your internet connection. </h1>
  }
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredListOfResturants = listOfResturants.filter(
                (res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredListOfResturants(filteredListOfResturants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfResturants(filteredList);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        {filteredListOfResturants?.map((resturant) => (
          <Link key={resturant.info.id} to={"/restaurants/"+resturant.info.id} className="res-link-style"><ResturantCard resData={resturant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

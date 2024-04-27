import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // normal js variable
  // let listOfResturants = [
  //   {
  //     info: {
  //       id: "112767",
  //       name: "Tea Junction",
  //       cloudinaryImageId: "77d2fffe27cd59af5045a102d08af522",
  //       costForTwo: "₹150 for two",
  //       cuisines: ["Beverages", "Snacks", "Desserts"],
  //       avgRating: 4.5,
  //       sla: {
  //         deliveryTime: 29,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "112768",
  //       name: "Dominos",
  //       cloudinaryImageId: "77d2fffe27cd59af5045a102d08af522",
  //       costForTwo: "₹150 for two",
  //       cuisines: ["Beverages", "Snacks", "Desserts"],
  //       avgRating: 3.8,
  //       sla: {
  //         deliveryTime: 36,
  //       },
  //     },
  //   },
  // ];

  // stateful variable
  let [listOfResturants, setListOfResturants] = useState(resList);

  // Or 
  // const arr = useState(resList);
  // const listOfResturants = arr[0];
  // const setListOfResturants = arr[1];
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredListOfResturants = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredListOfResturants);
            setListOfResturants(filteredListOfResturants);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

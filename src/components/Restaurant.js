import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const Restaurant = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    console.log(json);

    // optional chaining
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  findRecommendedArray = (item) => {
    if(item?.card?.card?.title === "Recommended") {
      return true;
    }
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const itemCardsFind = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(findRecommendedArray);
  const { itemCards } = itemCardsFind[0]?.card?.card ?? {};
  console.log(itemCardsFind);

  return (
    <div className="menu">
      <h1> {name} </h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}{" "}
      </p>
      <h3> Menu </h3>
      <ul>
        {itemCards?.map((res) => (
          <li key={res?.card?.info?.id}>{res?.card?.info?.name} - {res?.card?.info?.price/100} </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;

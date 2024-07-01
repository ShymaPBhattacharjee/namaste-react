import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);


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

export default RestaurantMenu;

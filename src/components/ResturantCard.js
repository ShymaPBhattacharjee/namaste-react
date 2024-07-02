import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[300px] bg-gray-50 hover:bg-gray-200">
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-logo rpunded-image"
      ></img>
      <h3 className="font-bold py-4 text-lg"> {name} </h3>
      <h4> {cuisines.join(",")} stars</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo} </h4>
      <h4> {resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;

import { useParams } from "react-router";
import Shimmer from "./shimmerUi";
import useMenu from "../utils/useMenu";
import MenuHeader from "./MenuComponent";
const MenuItem = () => {
  const param = useParams();

  const resInfo = useMenu(param.id);

  {
    if (resInfo.length === 0) return <Shimmer></Shimmer>;
  }

  // console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const { name, locality, city,costForTwoMessage,avgRating} = resInfo.data.cards[2]?.card?.card?.info;
  console.log(resInfo.data.cards[2]?.card?.card?.info);
  
  const cloudinaryImageId=resInfo.data.cards[2].card.card.info.cloudinaryImageId;

    const category=resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)

console.log(category);


// console.log(category.itemCards[0].card.info.name);

  
  //  const specifOne=resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name

  //  console.log(specifOne);
   
     


  // console.log(resInfo.data.cards[4].card.card.info.cloudinaryImageId);


  
  return (
    <div className="">
      <div className="bg-slate-100 w-1/3 m-auto border-solid border-[0.5px] mt-6 border-gray-300 shadow-2xl flex justify-between rounded-lg p-5">
      <div className="  mt-6 ms-24" >
      <h1 className="font-bold mt-2 text-center">{name}</h1>
      <h1 className="font-sans  ms-28 text-center">{costForTwoMessage}</h1>
      <span className=" ms-28">Rating⭐{avgRating}</span>


      </div>
      <img className="w-28 rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt="" />

      </div>

      <div className="w-1/2 bg-slate-200 m-auto mt-5">
  
      {
        category.map((data,i)=>{
        return   <MenuHeader key={i} data={data.card.card} />
        })
      }


      </div>
     
    </div>
   
  );
};
export default MenuItem;

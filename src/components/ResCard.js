const ResCard = ({restaurant}) => {
    const {name,avgRating,costForTwo,cuisines,cloudinaryImageId} = restaurant.info
      return (
       
         <div className="ms-16 mt-7 w-[300px] h-[500px] bg-slate-200 hover:bg-slate-300 rounded-3xl  hover:border-1 hover:border-black p-4">
          <img 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} 
            alt=""
            className="w-[295px] px-2 pt-2 rounded-2xl"
          />
          <div className="res-details-container">
            <h3 className="font-bold text-center" >{name}</h3>
            <p className="font-mono ps-7" >{avgRating}⭐</p>
          <div className="h-[0.5px] bg-slate-400"></div>
            <p className="font-semibold ps-7">{cuisines.join(' , ')}</p>
           
            <h3 className="font-mono ps-7"> {costForTwo}</h3>
            <br></br>
            
          </div>
        </div>
      
      );
    };

    export default ResCard
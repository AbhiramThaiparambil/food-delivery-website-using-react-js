import react, { useState } from "react";

const MenuBody = ({ data }) => {
  const { name, description } = data?.card?.info;
  return (
    <div className=" py-5 border-b-2 bg-white ">
      <span className="ms-3 font-semibold">{name}</span>
      <p className="mt-1 ms-1 font-thin">{description}</p>
    </div>
  );
};

const MenuHeader = ({ data }) => {
  const [click, setClick] = useState(false);

  return (
    <div>
      <div
        className="bg-slate-100 p-5 my-5 flex justify-between cursor-pointer shadow-2xl"
        onClick={() => setClick(!click)}
      >
        <h1 className="font-normal">
          {" "}
          {data.title} ({data.itemCards.length})
        </h1>

        <span>
          <i className="fa-solid fa-arrow-down"></i>
        </span>
      </div>

      {click &&
        data.itemCards.map((item) => (
          <MenuBody key={item.card?.info.id} data={item} />
        ))}
    </div>
  );
};

export default MenuHeader;

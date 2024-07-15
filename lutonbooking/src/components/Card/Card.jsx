import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index} className="w-80 rounded shadow-lg">
          <img
            src={item.imageUrl}
            alt="placeholder"
            className="object-cover h-64 w-full rounded"
          />
          <div className="p-2 border-t">
            <p className="text-2xl">{item.title}</p>
            <p className="text-sm my-2">{item.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      ))}

      {/* <div className="w-80 rounded shadow-lg">
        <img
          src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
          alt="placeholder"
          className="object-cover h-64 w-full rounded"
        />
        <div className="p-2 border-t">
          <p className="text-2xl">Title</p>
          <p className="text-sm my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            accusamus accusantium rem! Atque quidem similique, vitae doloribus
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded">
            Read More
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Card;

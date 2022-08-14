import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      {card.map((cards) => (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cards.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { card: data },
  };
}

import React, { useEffect, useState } from "react";
import Link from "next/link";
const Product = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center text-red-500 font-bold">Product</h1>
      <hr />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-5">
        {user.map((user) => (
          <div key={user.id}>
            <div className="card w-96 bg-base-100 shadow-xl hover:bg-primary">
              <figure className="px-10 pt-10">
                <img
                  src={user.img}
                  alt=""
                  className="rounded-xl w-40 h-20"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name}</h2>
                <p>Description:{user.description}</p>
                <p>regular_price:${user.regular_price}</p>
                <p>sale_price:${user.sale_price}</p>
                <p>stock:{user.stock}</p>

                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

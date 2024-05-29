import React from "react";

const Offer_Card = () => {
  return (
    <div className="bg-emerald text-white text-3xl w-full py-10 flex flex-col items-center justify-center rounded-md shadow shadow-gray-200">
      <p className="font-dynapuff">
        <a href="./signin.html" className="underline">
          Sign in
        </a>{" "}
        to get 10% Off /-
      </p>
    </div>
  );
};

export default Offer_Card;

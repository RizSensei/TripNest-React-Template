import React, { useState } from "react";
import Review_Slider from "../Property_Review/Review_Slider";
import AllReviewModal from "../Modal/AllReviewModal";

const ReviewSection = () => {
    const [isAllReviewModal, setIsAllReviewModal] = useState(false);

    const toggleAllReviewModal = () => {
        setIsAllReviewModal(!isAllReviewModal);
    }
  return (
    <>
      <div className="mt-5">
      <div className="flex flex-col gap-3">
        <h1 className="flex text-xl font-bold">
          Find out what the visitors thought was the best.
        </h1>
        <Review_Slider />
        <button className="w-max flex justify-start text-sm text-emerald underline" onClick={() => toggleAllReviewModal()}>
          View All Reviews
        </button>
      </div>
    </div>
    {
        isAllReviewModal && (
            <AllReviewModal toggleAllReviewModal={toggleAllReviewModal}/>
        )
    }
    
    </>
  
  );
};

export default ReviewSection;

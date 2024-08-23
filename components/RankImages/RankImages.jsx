import React from "react";

const RankImages = () => {
  return (
    <>
      <div className="rankImagesMain container mx-auto text-center">
        <div className="parentRankImages grid grid-cols-2 gap-0">
          <div className="p-1">
            <div className="impNoticeImg">
              <p>9000+ <br />PASSOUT</p>
            </div>
          </div>
          <div className="p-1">
            <div className="box2">
              <p>18 <br />YEARS <br /> OF TRUST</p>
            </div>
          </div>
          <div className="p-1">
            <div className="applyNowStepImg">
              <p>15:1 <br />STUDENT <br /> TEACHER <br /> RATIO</p>
            </div>
          </div>
          <div className="p-1">
            <div className="box3">
              <p>1:1 <br /> STUDENTS <br /> PORTFOLIOS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RankImages;

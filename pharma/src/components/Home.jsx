import React from "react";
import logo from "../../src/assets/meds.avif";
import BrandCarousel from "./BrandCarouselTest";

export const Home = () => {
  return (
    <div className="bg-sky-50">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <div className="px-8">
            <h2 className="text-3xl font-bold mb-4">
              Welcome To Ganga Pharma Pvt. Ltd
            </h2>
            <p className="text-lg text-justify">
              Ganga Pharma Private Limited is a registered Indian Pharmaceutical
              Company engaged in the manufacture and marketing of Pharmaceutical
              formulations. Located in the largest Pharmaceutical Hub of Asia,
              The Company had made a name for itself for its Quality and range
              of Products. Ganga Pharma offers World Best Quality. We strive to
              maintain the world Best class standards, our products are
              manufactured in renowned and reputed Indian Companies.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className="w-full h-64 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </div>
      </section>

      <div className="py-8 md:py-12">
        <BrandCarousel />
      </div>
    </div>
  );
};

import { ASSETS } from "../assets/path";
import { Button } from "./button";

export const Hero = () => {
  return (
    <div
    id="home"
    className="Unbounded-Regular bg-yellow-light py-10 md:py-14 flex-col-reverse flex md:flex-row page-padding items-center  space-x-0 md:space-x-10 xl:space-x-20 border-bottom">
      <div className="space-y-4 md:space-y-6 w-full md:w-1/2">
        <h1 className="font-semibold text-xl md:text-4xl">
          Discover the Best Local Salons for Your Ultimate Beauty Experience.
        </h1>
        <p className="text-sm md:text-base text-justify">
          Your go-to destination for finding the best salons in your area. We've
          made it effortless to discover and book nearby salons, allowing you to
          experience the convenience of beauty at your doorstep.
        </p>
        <Button background='bg-yellow-primary' text="Download App" onHandleClick="" />
      </div>
      <div className="w-full md:w-1/2 pb-8 md:pb-0">
        <img src={ASSETS.HERO} alt="" />
      </div>
    </div>
  );
};

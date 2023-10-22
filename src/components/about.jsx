import { ASSETS } from "../assets/path";

export const About = () => {
  return (
    <div id="about-us" className="bg-white py-10  responsive-flex page-padding  space-y-8 md:space-y-0 md:space-x-10 border-bottom">
      <div className="md:w-1/2">
        <img src={ASSETS.ABOUT} alt="" />
      </div>
      <div className="space-y-2 md:space-y-6 md:w-1/2">
        <h1 className="font-semibold text-xl md:text-2xl">About 'Hairstyl'</h1>
        <p className="text-sm md:text-base text-justify">
          Welcome to Hairstyl, your trusted source for discovering and
          experiencing the best salons in your area. We've streamlined the
          process of finding and booking local salons, ensuring that beauty is
          always within reach. With our platform, you can explore a variety of
          beauty services, read real reviews, and schedule your next appointment
          with ease. Uncover the secrets to a more glamorous you, all from the
          comfort of your neighborhood.
        </p>
      </div>
    </div>
  );
};

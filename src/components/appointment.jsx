import { ASSETS } from "../assets/path";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export const Appointment = () => {
  const responsive = {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1300: {
      items: 5,
    },
  };
  const List = [
    {
      backgroundColor: "bg-green-primary",
      title: "Party Makeup",
      color: "text-black-primary",
    },
    {
      backgroundColor: "bg-yellow-extralight",
      title: "Beard cut",
      color: "text-black-primary",
    },
    {
      backgroundColor: "bg-purple-light",
      title: "Hair Style",
      color: "text-black-primary",
    },
    {
      backgroundColor: "bg-yellow-dark",
      title: "Massage",
      color: "text-black-primary",
    },
    {
      backgroundColor: "bg-black-primary",
      title: "Nails",
      color: "text-white",
    },
  ];

  return (
    <div id="services" className="Unbounded-Regular py-10 md:py-14 max-w-[1440px] w-full">
      <div className="text-center  space-y-2 px-5 md:px-0">
        <h1 className="font-semibold text-xl md:text-2xl">
          Services at Hairstyl
        </h1>
        <p className="text-sm md:text-base ">
          Services for everyone of you. Hundreds of beauty services at one
          place.
        </p>

        <div className="overflow-hidden py-10">
          <OwlCarousel
            className="owl-theme "
            items={5}
            loop
            margin={20}
            autoplay={true}
            autoplaySpeed={200}
            navSpeed={250}
            responsive={responsive}
            dots={false}
          >
            {List.map((items, index) => (
              <div className="h-36" key={index}>
                <div
                  className={`shadow-card h-20 md:h-32 font-semibold text-sm md:text-base lg:text-lg  flex items-center justify-center ${items.color} ${items.backgroundColor}`}
                >
                  {items.title}
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div className="font-semibold text-xl md:text-2xl border-y-2 border-black-primary border-opacity-50 py-5">
          Download App Now!
        </div>
      </div>
      <div className="responsive-flex page-padding   md:space-x-10 ">
        <div className="space-y-6 md:w-1/2">
          <h1 className="font-semibold text-xl md:text-2xl">
            Discover and book an appointment
          </h1>
          <p>
            Find the shops near your location and book your favorite services.
            Manage bookings, customers sales and much more.
          </p>
          <div className="space-x-3 flex h-8 sm:h-10 md:h-12">
            <img src={ASSETS.BUTTONS.APP_STORE} alt="" />
            <img src={ASSETS.BUTTONS.GOOGLE_STORE} alt="" />
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={ASSETS.APPOINTMENT} alt="" />
        </div>
      </div>
    </div>
  );
};

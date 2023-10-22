import { ASSETS } from "../assets/path";

export const Appointment = () => {
  return (
    <div id="services" className="Unbounded-Regular">
      <div className="text-center py-10 space-y-2 px-5 md:px-0">
        <h1 className="font-semibold text-xl md:text-2xl">
          Services at Hairstyl
        </h1>
        <p className="text-sm md:text-base ">
          Services for everyone of you. Hundreds of beauty services at one
          place.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 md:py-10 text-xs sm:text-sm md:text-base">
          <div className="shadow-card h-20 md:h-32 flex items-center justify-center bg-green-primary">Party Makeup</div>
          <div className="shadow-card h-20 md:h-32 flex items-center justify-center bg-yellow-extralight">Beard cut</div>
          <div className="shadow-card h-20 md:h-32 flex items-center justify-center bg-purple-light">Hair Style</div>
          <div className="shadow-card h-20 md:h-32 flex items-center justify-center bg-yellow-dark">Massage</div>
          <div className="shadow-card h-20 md:h-32 flex items-center justify-center bg-black-primary text-white">Nails</div>
        </div>

        <div className="font-semibold text-xl md:text-2xl border-y-2 border-black-primary border-opacity-50 py-5">
          Download App Now!
        </div>

      </div>
      <div className="py-14 responsive-flex page-padding   md:space-x-10 ">
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

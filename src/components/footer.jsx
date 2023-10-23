import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { BiSolidEnvelope } from "react-icons/bi";
export const Footer = () => {
  return (
    <div>
      <div className="Unbounded-Regular py-5">
        <div className="bg-black-primary page-padding space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-between text-white py-4">
          <div>Get in touch with ous on social plateforms</div>
          <div className="flex space-x-4 items-center">
            <BiSolidEnvelope className="text-xl" />
            <FaFacebookF className="text-base" />
            <FaTwitter className="text-lg" />
            <FaInstagramSquare className="text-lg" />
            <FaLinkedin className="text-lg" />
          </div>
        </div>
        <div className="grid space-y-4 lg:space-y-0 md:grid-cols-2 lg:grid-cols-3  page-padding text-sm  h-36 py-8">
          <div className="flex flex-col justify-between">
            <div className="text-4xl font-bold">Hairstyl</div>
            <div className="text-xs lg:text-sm">Copyright @2023, all rights reserved.</div>
          </div>
          <div className="flex flex-col justify-between text-left lg:text-center text-xs lg:text-sm">
            <div>( Home / About us / Services )</div>
            <div>( Download App )</div>
            <div>Copyright @2023, all rights reserved.</div>
          </div>
          <div className="font-semibold text-xs lg:text-sm">
            “Your go-to destination for finding the best salons in your area.
            We've made it effortless to discover and book nearby salons.”
          </div>
        </div>
      </div>
    </div>
  );
};

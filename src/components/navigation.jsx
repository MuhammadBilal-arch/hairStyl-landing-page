import { MenuList } from "../constant";
import { Button } from "./button";
import { Link as ScrollLink } from "react-scroll";
export const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white flex items-center justify-between py-5 Unbounded-Regular border-b border-black-primary page-padding">
      <div className="font-semibold xl:font-bold text-xl lg:text-2xl">Hairstyl</div>
      <div className="hidden md:flex md:space-x-12 font-normal text-base text-black-primary">
        {MenuList.map(({ path, label }, i) => (
          <ScrollLink
            activeClass="active font-semibold"
            className="cursor-pointer"
            to={path}
            spy={true}
            smooth={false}
            // offset={-70}
            duration={500}
            key={i}
          >
            {label}
          </ScrollLink>
        ))}
      </div>
      <Button text="Contact us" />
    </nav>
  );
};

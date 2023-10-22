import { Button } from "./button"

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between py-5 Unbounded-Regular border-b border-black-primary page-padding">
        <div className="font-semibold xl:font-bold text-2xl">Hairstyl</div>
        <div className="hidden md:flex md:space-x-12 font-normal text-base">
            <a href="#home" className="cursor-pointer">Home</a>
            <a href="#about-us" className="cursor-pointer">About us</a>
            <a href="#services" className="cursor-pointer">Services</a>
        </div>
        <Button text="Contact us"/>
    </nav>
  )
}

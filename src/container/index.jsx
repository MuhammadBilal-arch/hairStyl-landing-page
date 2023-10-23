import { Fragment } from "react";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Appointment } from "../components/appointment";
import { Footer } from "../components/footer";

export const LandingPage = () => {
  return (
    <Fragment>
      <Navigation />
      <Hero/>
      <About/>
      <Appointment/>
      <Footer/>
    </Fragment>
  );
};

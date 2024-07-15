import heroImg from "../assets/hero.svg";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Gautam</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Engineering undergrad
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            National Institute of Technology, Raipur
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/GautamSahu028/">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="mailto:gautamsahu19102002@gmail.com">
              <FaEnvelope className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            {/* <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a> */}
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;

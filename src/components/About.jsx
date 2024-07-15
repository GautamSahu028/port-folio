import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            <p>
              Hi, I'm Gautam Kumar, a 5th-semester B.Tech. undergraduate
              specializing in Computer Science and Engineering. With a strong
              foundation in computer science principles and hands-on experience
              in various projects, I am passionate about leveraging technology
              to solve real-world problems.
            </p>
            <p>
              Beyond academics, I am an avid portrait sketch artist. Sketching
              allows me to explore my creativity and attention to detail, skills
              which I also bring into my technical projects.
            </p>
            <p>
              In addition to my primary interests, I am constantly seeking
              opportunities to expand my knowledge and skills. I enjoy learning
              about new technologies, participating in coding challenges, and
              collaborating with peers on innovative projects.
            </p>
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

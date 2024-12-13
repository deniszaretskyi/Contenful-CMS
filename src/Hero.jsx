import heroImage from "./assets/heroImage.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="heroText">
        <h1>Contentful CMS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
          magni provident temporibus omnis commodi consequuntur dolores nam?
        </p>
      </div>
      <div className="heroImage">
        <img src={heroImage} alt="heroImage" />
      </div>
    </section>
  );
};

export default Hero;

import { projects } from "./data";
const Projects = () => {
  return (
    <section className="projects">
      {projects.map((item) => {
        const { title, url, image } = item;
        console.log(image);

        return (
          <a key={title} href={url} className="project">
            <img src={image} alt={title} />
            <h3>{title}</h3>
          </a>
        );
      })}
    </section>
  );
};

export default Projects;

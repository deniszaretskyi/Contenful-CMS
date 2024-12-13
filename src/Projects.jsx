import { useGetProjects } from "./hook";
const Projects = () => {
  const { isLoading, fetchedProjects } = useGetProjects();
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="projects">
      {fetchedProjects.items.map((item) => {
        return (
          <a
            target="_blank"
            key={item.sys.id}
            href={item.fields.url}
            className="project"
          >
            <img
              src={item.fields.image.fields.file.url}
              alt={item.fields.title}
            />
            <h3>{item.fields.title}</h3>
          </a>
        );
      })}
    </section>
  );
};

export default Projects;

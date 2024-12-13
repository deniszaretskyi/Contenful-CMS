import { createClient } from "contentful";
import { useEffect, useState } from "react";
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useGetProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedProjects, setFetchedProjects] = useState([]);
  const getData = async () => {
    try {
      const resp = await client.getEntries({ content_type: "projects" });
      setFetchedProjects(resp);
      setIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return { isLoading, fetchedProjects };
};

export default client;

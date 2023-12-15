import { useEffect, useState } from 'react';
import { Project, Projects } from './Projects';

type ProjectArray = Project[];

async function fetchProjects(): Promise<ProjectArray> {
  const res = await fetch('/api/projects');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export default function App() {
  const [serverData, setServerData] = useState<ProjectArray>();

  useEffect(() => {
    async function readServerData() {
      try {
        const data = await fetchProjects();

        console.log('Data from server:', data);

        setServerData(data);
      } catch (error) {
        console.error('error');
      }
    }
    readServerData();
  }, []);

  type ProjectArray = Project[];

  return (
    <div className="bg-blue">
      <h1 className="text-center">Hello World!</h1>
      <div>
        {serverData?.map((project: Project) => (
          <div
            key={project.projectId}
            className="flex flex-wrap justify-center">
            <Projects project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

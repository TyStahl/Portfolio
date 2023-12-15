export type Project = {
  projectId: number;
  name: string;
  imageUrl: string;
  githubUrl: string;
  domainUrl: string;
};

type ProjectProps = {
  project: Project;
};

export function Projects({ project }: ProjectProps) {
  const { name, imageUrl, githubUrl, domainUrl } = project;
  return (
    <div className="border-2 rounded w-3/4">
      <h1>{name}</h1>
      <img src={imageUrl} alt="project name" />
      <div className="bg-red-200 flex justify-around">
        <a className="w-1/3 border-2 rounded text-center" href={githubUrl}>
          Github
        </a>
        <a className="w-1/3 border-2 rounded text-center" href={domainUrl}>
          View
        </a>
      </div>
    </div>
  );
}

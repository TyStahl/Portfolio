import { useEffect, useState } from 'react';
import { Projects } from './Projects';

export default function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/projects');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <>
      <h1 className="text-center">{serverData}</h1>
      <div className="flex flex-wrap justify-center">
        <Projects />
      </div>
    </>
  );
}

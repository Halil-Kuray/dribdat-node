import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState()
  const [eventData, setEventData] = useState()
  const [projectsData, setProjectsData] = useState()

  async function fetchData () {
    const response = await fetch('https://hack.opendata.ch/api/event/current/projects.json')
    const resData = await response.json()
    if (resData && resData != null) {
      setData(resData)
      setEventData(resData.event)
      setProjectsData(resData.projects)
    }
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;

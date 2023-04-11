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

      {eventData && (
        <section>
          <h1>{eventData.name}</h1>
          <img src={eventData.logo_url}/>
          <img src={eventData.gallery_url}/>
          <h1> Start :{eventData.starts_at}</h1>
          <h1> End : {eventData.ends_at}</h1>
          <h1>Event Details</h1>
          <p>{eventData.summary}</p>
          <a href={eventData.webpage_url}> Event Web Page</a>
          <h1>{eventData.location}</h1>
        </section>
      )}

      {projectsData && projectsData.map((projectsData) => (
        <article key={projectsData.id}>
          <h1>{projectsData.name}</h1>
          <a href={projectsData.autotext_url}>Project details</a>
          <a href={projectsData.contact_url}>contact mail</a>
          <a href={projectsData.event_url}>Event Url</a>
          <h3>excerpt</h3>
          <p>{projectsData.excerpt}</p>
          <p>{projectsData.summary}</p>
          <ul>
            <li> challange created at : {projectsData.created_at} </li>
            <li> challange updated at : {projectsData.updated_at} </li>
            <li> challange maintainer : {projectsData.maintainer} </li>
            <li> challange progress : {projectsData.progress} </li>
            <li> challange score : {projectsData.score} </li>
            <li> challange team : {projectsData.team} </li>
            <li> Team count : {projectsData.team_count} </li>
          </ul>
        </article>
      ))}
    </div>
  );
}

export default App;

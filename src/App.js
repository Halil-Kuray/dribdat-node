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
          <ul>
            <li>Start :{eventData.starts_at}</li>
            <li>End : {eventData.ends_at}</li>
          </ul>
          <h3>Event Details</h3>
          <p>{eventData.summary}</p>
          <a href={eventData.webpage_url}> Event Web Page</a>
          <address>Location: {eventData.location}</address>
        </section>
      )}

      {projectsData && projectsData.map((projectsData) => (
        <article key={projectsData.id}>
          <h1>{projectsData.name}</h1>
          <ul>
            <li><a href={projectsData.autotext_url}>Project details</a></li>
            <li>contact mail: {projectsData.contact_url}</li>
            <li><a href={projectsData.event_url}>Event Url</a></li>
          </ul>
          
          
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

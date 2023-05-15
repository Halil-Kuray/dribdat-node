export const fetchData = async (user_provided_url) => {
    // Parse the project URL and turn into an API reference
    let url_parts = user_provided_url.split('/project/')

    // Take the fist part as URL
    const base_url = url_parts[0]

    // Remove anchors
    const project_id = parseInt(url_parts[1].split('#')[0])

    // Compose the API call
    const project_api = `${base_url}/api/project/${project_id}/info.json`

    // Collect and respond the data
    const response = await fetch(project_api)
    const resData = await response.json()
    if (resData && resData != null) {
        return resData;
    }
    throw "Could not load remote data"
}

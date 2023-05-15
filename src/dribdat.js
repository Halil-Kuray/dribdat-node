import fetch from "node-fetch"

export const fetchData = async (user_provided_url) => {
    if (typeof user_provided_url == 'undefined' || !user_provided_url) {
        Promise.reject(new Error("URL is required"))
    }

    // Parse the project URL and turn into an API reference
    let url_parts = user_provided_url.split('/project/')

    // Verify the url
    if (url_parts.length !== 2) {
        throw "Invalid format"
    }

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

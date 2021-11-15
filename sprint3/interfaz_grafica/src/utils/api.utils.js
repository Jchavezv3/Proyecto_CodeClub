const API_URL = "http://localhost:8080/api";


const serviceCall = async (endpoint, method, request) => {
    const url = `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      method,
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json"
      },
    });
  return response.json();
};
  
const GETcall = (url) => {
  return serviceCall(url, "GET");
};

const POSTCall = (url, request) => {
  return serviceCall(url, "POST", request);
};

const DELETECall = (url) => {
  return serviceCall(url, "DELETE");
};

const PUTCall = (url, request) => {
  return serviceCall(url, "PUT", request);
};

export { GETcall, POSTCall, DELETECall, PUTCall };
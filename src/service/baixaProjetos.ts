import axios from "axios";

const apiProjetos = axios.create({
  baseURL: "http://localhost:3000/",
});

export default apiProjetos;

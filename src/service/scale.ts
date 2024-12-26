import axios from "axios";

const scaleService = {
  getScales: () => {
    return axios.get<{
      scales: {
        id: string;
        name: string;
        typeName: string;
        createdAt: string;
      }[];
    }>("/api/scale");
  },
  addScale: (data: { name: string }) => {
    return axios.post("/api/scale", data);
  },
};

const data = scaleService.getScales();

export default scaleService;

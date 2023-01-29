import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization:
      "Bearer EDJNltLw75m0gRuHnm8WFTxISz0_lKKdYfkkOLTVTY0A1yx3Ijc-Q-L2cDuRqkKbVxKAR5Vh6N6311FSTRQkhZmA_7EzUmcUjqpcOJAF7MJ5aFKPuow_TRGdQqvWY3Yx",
    accept: "application/json",
  },
});

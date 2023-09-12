import axios from 'axios';

axios.defaults.baseURL = "https://64fce7b7605a026163aee07c.mockapi.io/catalog/adverts";

export const fetchCars = async (page = 1) => {
	const res = await axios.get(`?page=${page}&limit=8`);
	return res.data;
};


export const getCarById = async id => {
  const res = await axios.get(`/${id}`);
  return res.data;
};


import Axios from "axios";

export default async () => {
  const response = await Axios.get("https://jsonplaceholder.typicode.com/users/");
  return response.data;
};

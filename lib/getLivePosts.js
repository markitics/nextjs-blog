// import httpService from "../services/httpService";
const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
import axios from "axios";

// export function getLivePosts() {
//   // Replace that with a live version:
//   const result = httpService.get(apiEndpoint).then(() => {
//     console.log(result);
//     return result.data;
//   });
// }
export async function getLivePosts() {
  // Replace that with a live version:
  const result = await axios.get(apiEndpoint);
  console.log(result);
  console.log("Will return result.data", result.data);
  return result.data;
}

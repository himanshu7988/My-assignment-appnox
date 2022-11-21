import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "9c09ab97110d485e8cde66b92ccc287a";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-library-read","user-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });

  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;


// Api for use in other pages

  // const [image, setImage] = useState(
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  // );
  // useEffect(() => {
  //   apiClient.get("me").then((response) => {
  //     setImage(response.data.images[0].url);
  //   });
  // }, []);
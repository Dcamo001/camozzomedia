import axios from "axios";

export async function fetchImages(cb) {
  console.log("Hello from fetchImages");

  try {
    const response = await axios({
      method: "get",
      url:
        "https://r3cfyldhn8.execute-api.us-west-1.amazonaws.com/dev/fetchImages",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    return response.data.gallery;
  } catch (error) {
    console.error("WHOOPS", error);
    return [];
  }
}

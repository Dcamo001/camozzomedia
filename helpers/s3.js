import axios from "axios";

export async function fetchImages(cb) {
  console.log("Hello from fetchImages");

  try {
    const response = await axios.get(
      "https://r3cfyldhn8.execute-api.us-west-1.amazonaws.com/dev/fetchImages"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

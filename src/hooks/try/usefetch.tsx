import axios from "axios";

const usefetchData = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://www.random.org/strings/?num=10&len=32&upperalpha=on&unique=off&format=plain"
      );
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return { fetchData };
};

export default usefetchData;

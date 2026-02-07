import words from "./words.json";

export const getRandomWord = () => {
  // Lowercase words for simplicity
  return words[Math.floor(Math.random() * words.length)].toLowerCase();
};

export const fetchWordImage = async (word) => {
  const accessKey = "b1I1uraChdsiZW8rnRE59Y1jl1GKv6cQCLEkm__tsCE";
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${accessKey}`,
    );
    const data = await response.json();
    // Return the first image result, or a fallback if none found
    return (
      data.results[0]?.urls?.regular ||
      "https://via.placeholder.com/400?text=No+Image"
    );
  } catch (error) {
    console.error("Error fetching image:", error);
    return "https://via.placeholder.com/400?text=Error";
  }
};

import { useEffect, useState } from "react";
import ScoreCard from "./components/scorecard";
import GameCard from "./components/game";

function App() {
  const initialImages = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  ];

  const [images, setImages] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);

  const shuffleArray = (arr) => {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    const shuffledImages = shuffleArray([...initialImages, ...initialImages]);
    setImages(shuffledImages);
  }, []);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (images[firstIndex] === images[secondIndex]) {
        setMatchedPairs((prev) => [...prev, firstIndex, secondIndex]);
        setScore((prevScore) => prevScore + 10);
        setFlippedIndices([]);
      } else {
        setTimeout(() => setFlippedIndices([]), 1000);
      }
    }
  }, [flippedIndices, images]);

  const handleImageClick = (index) => {
    if (
      flippedIndices.length < 2 &&
      !flippedIndices.includes(index) &&
      !matchedPairs.includes(index)
    ) {
      setFlippedIndices((prev) => [...prev, index]);
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    backgroundImage:
      "url('https://slidechef.net/wp-content/uploads/2024/01/Pikachu-Pokemon-Background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={containerStyle}>
      {/* Scorecard on the left */}
      <ScoreCard
        score={score}
        matchedPairs={matchedPairs}
        totalPairs={images.length / 2}
      />

      {/* Game Grid */}
      <GameCard
        images={images}
        flippedIndices={flippedIndices}
        matchedPairs={matchedPairs}
        handleImageClick={handleImageClick}
      />
    </div>
  );
}

export default App;

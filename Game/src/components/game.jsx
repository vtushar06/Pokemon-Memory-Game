import Item from "./Item";
import "./game.css";

function GameCard({ images, flippedIndices, matchedPairs, handleImageClick }) {
  const placeholderImage =
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG";

  return (
    <div className="grid-container">
      {images.map((img, index) => (
        <Item
          key={index}
          image={
            flippedIndices.includes(index) || matchedPairs.includes(index)
              ? img
              : placeholderImage
          }
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
}
export default GameCard;

import "./item.css";
function Item({ image, onClick }) {
  const imgStyle = {
    width: "80%", // Adjust size as needed
    height: "80%",
    objectFit: "cover",
  };
  return (
    <div className="card-style" onClick={onClick}>
      <img src={image} alt="Memory Game Card" style={imgStyle} />
    </div>
  );
}

export default Item;

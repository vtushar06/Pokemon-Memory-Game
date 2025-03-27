import "./scorecard.css";
function ScoreCard({ score, matchedPairs, totalPairs }) {
  return (
    <div className="score-card-style">
      <h1>Score: {score}</h1>
      {/* Conditional heading for winning */}
      {matchedPairs.length === totalPairs && (
        <>
          <h1 style={{ fontSize: "20px", color: "green", marginTop: "10px" }}>
            You Have Won!
          </h1>
          <h5>**Refresh Game to Restart**</h5>
        </>
      )}
    </div>
  );
}
export default ScoreCard;

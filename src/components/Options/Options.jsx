export default function Options({goodFeedback, neutralFeedback, badFeedback,resetFeedback, totalFeedback}){
    return (
        <div>
            <button onClick={goodFeedback}>Good</button>
            <button onClick={neutralFeedback}>Neutral</button>
            <button onClick={badFeedback}>Bad</button>
            {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
        </div>
    )
}
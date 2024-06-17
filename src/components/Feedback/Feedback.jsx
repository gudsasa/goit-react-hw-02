export default function Feedback ({good, neutral, bad, total, positive }) {
    positive = total > 0 ? Math.round((good / total) * 100) : 0;
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </>
    )
}
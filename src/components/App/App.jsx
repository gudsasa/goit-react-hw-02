import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

export default function App() {
    const [feedbacks, setFeedbacks] = useState(() => {
        const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
        console.log(savedFeedbacks);
        return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
    }, [feedbacks]);

    const updateFeedback = (feedbackType) => {
        setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
    };

    const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

    const resetFeedback = () => {
        setFeedbacks({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    return (
        <div>
            <Description name="Sip Happens Café" descr="Please leave your feedback about our service by selecting one of the options below." />

            <Options goodFeedback={() => updateFeedback("good")} neutralFeedback={() => updateFeedback("neutral")} badFeedback={() => updateFeedback("bad")} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />

            {totalFeedback > 0 ? <Feedback good={feedbacks.good} neutral={feedbacks.neutral} bad={feedbacks.bad} total={totalFeedback} /> : <Notification />}
        </div>
    );
}

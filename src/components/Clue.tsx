import { useState, useEffect } from "react";
import styles from "./styles/Clue.module.css";

export default function Counter({
    question,
    hint,
    answer,
    setIsShow,
    showAnswer,
}: {
    question: string;
    hint: string;
    answer: string;
    setIsShow: Function;
    showAnswer: boolean;
}) {
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
    const [clueStyle, setClueStyle] = useState(styles.clue);

    useEffect(() => {
        if (isCorrect === true) setClueStyle(styles.clueCorrect);
        else if (isCorrect === false) setClueStyle(styles.clueIncorrect);
    }, [isCorrect]);

    useEffect(() => {
        if (showAnswer) {
            setUserAnswer(answer);
            setIsShow(true);
            setIsCorrect(true);
        }
    }, [showAnswer]);

    const checkAnswer = (answer: string, userAnswer: string) => {
        if (answer.toLowerCase() === userAnswer.toLowerCase()) {
            setIsShow(true);
            setIsCorrect(true);
        } else {
            setIsShow(false);
            setIsCorrect(false);
        }
    };

    return (
        <div className={clueStyle}>
            <div className={styles.tooltip}>
                {question}
                <span className={styles.tooltiptext}>{hint}</span>
            </div>
            <input
                type="text"
                placeholder="Your guess"
                value={showAnswer ? answer : userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className={styles.input}
            />
            <button
                onClick={() => checkAnswer(answer, userAnswer)}
                className={styles.button}
            >
                Check
            </button>
        </div>
    );
}

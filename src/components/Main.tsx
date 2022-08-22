import { useState } from "react";
import Clue from "./Clue";
import ImageGrid from "./ImageGrid";
import styles from "./styles/Main.module.css";

export default function Main() {
    const [isShow1, setIsShow1] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    const [isShow3, setIsShow3] = useState(false);
    const [isShow4, setIsShow4] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <>
            <div className={styles.clues}>
                <Clue
                    question="199"
                    hint="When is RI this old? Answer: _ _"
                    answer="22"
                    setIsShow={setIsShow1}
                    showAnswer={showAnswer}
                />
                <Clue
                    question="You didn't really pass the test."
                    hint="Stands for SPECTACULAR"
                    answer="S"
                    setIsShow={setIsShow2}
                    showAnswer={showAnswer}
                />
                <Clue
                    question="Holidays but not really 🤫"
                    hint="Jan (01), Feb (02) ... Answer: _ _"
                    answer="06"
                    setIsShow={setIsShow3}
                    showAnswer={showAnswer}
                />
                <Clue
                    question="Step on me when I'm dry, not when I'm wet."
                    hint="I'm on the ground, just green and chillin'"
                    answer="Grass"
                    setIsShow={setIsShow4}
                    showAnswer={showAnswer}
                />
            </div>

            <div className={styles.buttonContainer}>
                <button
                    onClick={() => setShowAnswer(true)}
                    className={styles.button}
                >
                    <span className={styles.buttonText}>Give up?</span>
                </button>
            </div>

            <ImageGrid
                isShow1={isShow1}
                isShow2={isShow2}
                isShow3={isShow3}
                isShow4={isShow4}
            />
        </>
    );
}

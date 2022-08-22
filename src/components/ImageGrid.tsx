import styles from "./styles/Main.module.css";

export default function ImageGrid({
    isShow1,
    isShow2,
    isShow3,
    isShow4,
}: {
    isShow1: boolean;
    isShow2: boolean;
    isShow3: boolean;
    isShow4: boolean;
}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.images}>
                    <img
                        src={isShow1 ? "/Clue/TL.png" : "/Placeholder/TL.png"}
                        alt={isShow1 ? "Unlocked - Clue #1" : "Locked - Clue #1"}
                        width={150}
                        height={150}
                    />
                    <img
                        src={isShow2 ? "/Clue/TR.png" : "/Placeholder/TR.png"}
                        alt={isShow2 ? "Unlocked - Clue #2" : "Locked - Clue #2"}
                        width={150}
                        height={150}
                    />
                    <img
                        src={isShow3 ? "/Clue/BL.png" : "/Placeholder/BL.png"}
                        alt={isShow3 ? "Unlocked - Clue #3" : "Locked - Clue #3"}
                        width={150}
                        height={150}
                    />
                    <img
                        src={isShow4 ? "/Clue/BR.png" : "/Placeholder/BR.png"}
                        alt={isShow4 ? "Unlocked - Clue #4" : "Locked - Clue #4"}
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <br />
            {isShow1 && isShow2 && isShow3 && isShow4 && (
                <div className={styles.tooltip}>
                    What does this mean?
                    <div className={styles.tooltiptext}>
                        It's a pigeon falling into a hole. So it's a pigeon _ _
                        _ _!
                    </div>
                </div>
            )}
        </>
    );
}

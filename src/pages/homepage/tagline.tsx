import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import CorettaSymbol from '../../assets/vectors/symbol-positive.svg'

export default class Tagline extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.Tagline} id="Me">
                <div className={styles.Centered}>
                    <div className={styles.Block}>
                        <h2>MANTRA</h2>
                        <h1>
                            I BELIEVE THAT THE CUSTOMER IS THE MOST
                            IMPORTANT PART OF A PRODUCT. BUILDING FOR
                            THEM IS WHAT MAKES US HAPPY.
                        </h1>
                    </div><div className={styles.Block}>
                        <CorettaSymbol className={styles.Symbol} />
                    </div>
                </div>
            </div>
        )
    }
}
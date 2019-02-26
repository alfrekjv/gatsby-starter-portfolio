import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import CorettaSymbol from '../../assets/vectores/symbol-positive.svg'

export default class Tagline extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.Tagline} id="Us">
                <div className={styles.Centered}>
                    <div className={styles.Block}>
                        <h2>MANTRA</h2>
                        <h1>WE BUILDING IN BUILDING BRANDS THAT TRASCEND BY TELLING THE RIGHT STORY.</h1>
                    </div><div className={styles.Block}>
                        <CorettaSymbol className={styles.Symbol} />
                    </div>
                </div>
            </div>
        )
    }
}
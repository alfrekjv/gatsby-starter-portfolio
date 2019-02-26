import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import SymbolNegative from '../../assets/vectors/symbol-negative.svg'
import Phone from '../../assets/vectors/icn-phone.svg'
import Mail from '../../assets/vectors/icn-mail.svg'
import Heart from '../../assets/vectors/heart.svg'

export default class Navbar extends React.Component<{}, {}> {
    render() {
        return (
            <footer className={styles.Footer}>
                <div  className={styles.Centered}>
                    <div className={styles.Symbol}>
                        <SymbolNegative />
                    </div>
                    <div className={styles.Copyright}>
                        <p>&copy; 2019 Fogata Design Studio.</p>
                        <p>All rights reserved.</p>
                    </div>
                    <div className={styles.Contact}>
                        <p><Phone /> +52 (331)032-0163</p>
                        <p><Mail /> hola@coretta.mx</p>
                    </div>
                </div>

                <div className={styles.BrewedWithLove}>
                    <p>Brewed with <Heart /> By <a href='https://coretta.mx'>Coretta Studio.</a></p>
                </div>
            </footer>
        )
    }
}
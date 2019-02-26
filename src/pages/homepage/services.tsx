import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import Branding from '../../assets/vectors/branding.svg'
import Consulting from '../../assets/vectors/consulting.svg'
import Design from '../../assets/vectors/design.svg'
import Development from '../../assets/vectors/development.svg'
import Strategy from '../../assets/vectors/strategy.svg'
import Training from '../../assets/vectors/training.svg'

export default class Services extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.Services} id="Services">
                <div className={styles.Centered}>
                    <h1>Lorem ipsum dolor sit amet</h1>

                    <p className={styles.Subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed feugiat ex sed orci congue, lacinia eleifend ligula lacinia.
                        Maecenas ut enim vehicula, commodo nunc a, fermentum magna.
                        Cras et dolor sit amet neque cursus condimentum.
                        Praesent tempus egestas eros non laoreet.
                        Donec non dolor risus.
                    </p>
                </div>

                <ul className={styles.Service}>
                    <li>
                        <div className={styles.Icon}><Consulting /></div>
                        <div className={styles.Label}>CONSULTING</div>
                    </li><li>
                        <div className={styles.Icon}><Branding /></div>
                        <div className={styles.Label}>BRANDING</div>
                    </li><li>
                        <div className={styles.Icon}><Design /></div>
                        <div className={styles.Label}>DESIGN</div>
                    </li><li>
                        <div className={styles.Icon}><Strategy /></div>
                        <div className={styles.Label}>STRATEGY</div>
                    </li><li>
                        <div className={styles.Icon}><Development /></div>
                        <div className={styles.Label}>DEVELOPMENT</div>
                    </li><li>
                        <div className={styles.Icon}><Training /></div>
                        <div className={styles.Label}>TRAINING</div>
                    </li>
                </ul>
            </div>
        )
    }
}
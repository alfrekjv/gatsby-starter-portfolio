import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import Logo from '../../assets/vectors/fogata.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navbar extends React.Component<{}, {}> {
    render() {
        return (
            <section className={styles.Navbar}>
                <section className={styles.Centered}>
                    <div className={styles.Logo}>
                        <AnchorLink offset="100" href="/">
                            <Logo />
                        </AnchorLink>
                    </div>
                    <nav className={styles.Menu}>
                        <AnchorLink offset="100" href="#Us">Us</AnchorLink>
                        <AnchorLink offset="100" href="#Services">Services</AnchorLink>
                        <AnchorLink offset="100" href="#Portfolio">Portfolio</AnchorLink>
                        <AnchorLink offset="100" href="#Contact">Contact</AnchorLink>
                    </nav>
                </section>
            </section>
        )
    }
}
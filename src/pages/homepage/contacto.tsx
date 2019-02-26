import React from 'react'
import * as styles from '../../assets/styles.module.scss'
import { default as ContactForm } from './contactForm'

export default ({ data }: any) => (
    <div className={styles.Contact} id="Contact">
        <header>
            <h1>¿Tienes un reto para nosotros?</h1>
            <p className={styles.Subtitle}>
                Sea el reto que tengas en mente,
                ten por seguro que daremos lo
                mejor de nosotros para hacerlo
                realidad.
            </p>
        </header>
        <ContactForm />
    </div>
)
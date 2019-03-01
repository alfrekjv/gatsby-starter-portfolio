import React from 'react'
import * as styles from '../../assets/styles.module.scss'
import { default as ContactForm } from './contactForm'

export default ({ data }: any) => (
    <div className={styles.Contact} id="Contact">
        <header>
            <h1>Have a challenge for us?</h1>
            <p className={styles.Subtitle}>
                Aenean eget condimentum odio. Aenean posuere tortor diam,
                quis commodo leo molestie faucibus. Fusce velit nunc,
                rhoncus sit amet nisi eget, porta sagittis tortor.
            </p>
        </header>
        <ContactForm />
    </div>
)
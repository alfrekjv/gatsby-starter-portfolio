import * as React from 'react'
import * as styles from '../assets/styles.module.scss'
import { default as Navbar } from './common/navbar'
import { default as Heroshot } from './common/heroshot'
import { default as Tagline } from './homepage/tagline'
import { default as Services } from './homepage/services'
import { default as Portfolio } from './homepage/portfolio'
import { default as Contact } from './homepage/contacto'
import { default as Footer } from './common/footer'
import { Helmet } from 'react-helmet'

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {

    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <section className={styles.Container}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Fogata Design Studio</title>
                    <link rel="canonical" href="https://coretta.mx/" />
                </Helmet>
                <Navbar />
                <Heroshot
                    title="We create stunning brands!"
                    subtitle="Aenean eget condimentum odio. Aenean posuere tortor diam,
                        quis commodo leo molestie faucibus. Fusce velit nunc,
                        rhoncus sit amet nisi eget, porta sagittis tortor."
                />
                <div className={styles.Homepage}>
                    <Tagline />
                    <Services />
                    <Portfolio />
                    <Contact />
                </div>
                <Footer />
            </section>
        )
    }
}
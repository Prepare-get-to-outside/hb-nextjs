import { Container } from "semantic-ui-react";
import Head from 'next/head';
import { Header } from 'semantic-ui-react';
import { Image, Reveal } from 'semantic-ui-react'


export default function About() {
    return (
        <>
            <Head>
                <title> Deveeni | About </title>
                <meta name="about" content="Deveeni about"></meta>
            </Head>
            <Reveal animated='move'>
                <Reveal.Content visible>
                    <Image src='/images/temp.png' size='small' />
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image src='/images/kiki.png' size='small' />
                </Reveal.Content>
            </Reveal>
            <Container text>
                <Header></Header>
                <p>
                    ABOUT
                </p>
            </Container>
        </>
    );
}
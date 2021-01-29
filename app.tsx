import React, { ComponentType } from 'https://esm.sh/react'
import { Head } from 'https://deno.land/x/aleph/mod.ts'
import './style/index.css';

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A book about writing, testing and maintaining JavaScript and TypeScript web applications using Deno" ></meta>
        <meta property="og:title" content="Deno Web Development - Alexandre Santos" data-react-helmet="true"></meta>
        <meta property="og:description" content="A book about writing, testing and maintaining JavaScript and TypeScript web applications using Deno"></meta>
        <meta property="og:type" content="website"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:creator" content="Alexandre Portela dos Santos" data-react-helmet="true"></meta>
        <meta name="twitter:title" content="Deno Web Development - Write, test, maintain JavaScript and TypeScript web applications using Deno"></meta>
        <meta name="twitter:description" content="A complete guide with step-by-step explanations of Deno’s primitives, using them to build real-word applications."></meta>
        <title>Deno Web Development - Write, test, maintain JavaScript and TypeScript web applications using Deno</title>
      </Head>
      <Page {...pageProps} />
    </>
  )
}

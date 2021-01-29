import React, { ComponentType } from 'https://esm.sh/react'
import { Head } from 'https://deno.land/x/aleph/mod.ts'
import './style/index.css';

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deno Web Development - Write, test, maintain JavaScript and TypeScript web applications using Deno</title>
        <meta name="title" content="Deno Web Development - Write, test, maintain JavaScript and TypeScript web applications using Deno"></meta>
        <meta name="description" content="A book about writing, testing and maintaining JavaScript and TypeScript web applications using Deno"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://deno-web-development.com/"></meta>
        <meta property="og:title" content="Deno Web Development - Write, test, maintain JavaScript and TypeScript web applications using Deno"></meta>
        <meta property="og:description" content="A book about writing, testing and maintaining JavaScript and TypeScript web applications using Deno"></meta>
        <meta property="og:image" content="/banner-seo.png"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://deno-web-development.com/"></meta>
        <meta property="twitter:title" content="Deno Web Development - Write, test, maintain JavaScript and TypeScript web applications using Deno"></meta>
        <meta property="twitter:description" content="A book about writing, testing and maintaining JavaScript and TypeScript web applications using Deno"></meta>
        <meta property="twitter:image" content="/banner-seo.png"></meta>
      </Head>
      <Page {...pageProps} />
    </>
  )
}

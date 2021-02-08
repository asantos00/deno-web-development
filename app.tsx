import React, { ComponentType } from 'https://esm.sh/react'
import { Head, Scripts } from 'https://deno.land/x/aleph/mod.ts'
import './style/index.css';

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deno Web Development - Write, test, maintain and deploy JavaScript and TypeScript web applications using Deno</title>
        <meta name="title" content="Deno Web Development - Write, test, maintain and deploy JavaScript and TypeScript web applications using Deno"></meta>
        <meta name="description" content="A complete guide with step-by-step explanations of Deno's primitives, using them to build real-word applications. A guided process on learning Deno and its features while a complete web application, from hello world, to testing, adding users and deploying."></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://deno-web-development.com/"></meta>
        <meta property="og:title" content="Deno Web Development - Write, test, maintain and deploy JavaScript and TypeScript web applications using Deno"></meta>
        <meta property="og:description" content="A complete guide with step-by-step explanations of Deno's primitives, using them to build real-word applications. A guided process on learning Deno and its features while a complete web application, from hello world, to testing, adding users and deploying."></meta>
        <meta property="og:image" content="https://deno-web-development.com/banner-seo.jpg"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="600"></meta>
        <meta property="og:image:secure_url" content="https://deno-web-development.com/banner-seo.jpg"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://deno-web-development.com/"></meta>
        <meta property="twitter:title" content="Deno Web Development - Write, test, maintain and deploy JavaScript and TypeScript web applications using Deno"></meta>
        <meta property="twitter:description" content="A complete guide with step-by-step explanations of Deno's primitives, using them to build real-word applications. A guided process on learning Deno and its features while a complete web application, from hello world, to testing, adding users and deploying."></meta>
        <meta property="twitter:image" content="https://deno-web-development.com/banner-seo.jpg"></meta>
        <link rel="image_src" href="https://deno-web-development.com/banner-seo.jpg" />
      </Head>
      <Scripts>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2ETE5MRE3Y"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2ETE5MRE3Y');
        `}
        </script>
      </Scripts>
      <Page {...pageProps} />

    </>
  )
}

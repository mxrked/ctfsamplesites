/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";
export const PageHead = ({ page_head_data }) => {
  const router = useRouter();

  return (
    <Head id="pageHead">
      <title>{page_head_data.pageTitle}</title>

      <meta name="keywords" content={page_head_data.pageKeywords} />
      <meta name="description" content={page_head_data.pageDesc} />
      <meta name="robots" content={page_head_data.pageRobots} />

      {/** FACEBOOK */}
      <meta property="og:title" content={page_head_data.pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content={page_head_data.f512} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      {/** TWITTER */}
      <meta name="twitter:image" content={page_head_data.f512} />
      <meta name="twitter:card" content={page_head_data.pageDesc} />

      <link rel="canonical" href={page_head_data.pageSiteParent} />
      <link rel="icon" type="image/x-icon" href={page_head_data.favicon} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={page_head_data.f16}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={page_head_data.f32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href={page_head_data.f48}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href={page_head_data.f64}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={page_head_data.f96}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href={page_head_data.f128}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={page_head_data.f192}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={page_head_data.f512}
      />
      <link rel="apple-touch-icon" sizes="57x57" href={page_head_data.ati57} />
      <link rel="apple-touch-icon" sizes="76x76" href={page_head_data.ati76} />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={page_head_data.ati120}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={page_head_data.ati152}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={page_head_data.ati180}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href={page_head_data.android72}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={page_head_data.android96}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href={page_head_data.android144}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={page_head_data.android192}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={page_head_data.ms32} />
      <meta
        name="msapplication-square70x70logo"
        content={page_head_data.ms70}
      />
      <meta
        name="msapplication-square150x150logo"
        content={page_head_data.ms150}
      />
      <meta
        name="msapplication-wide310x150logo"
        content={page_head_data.ms310}
      />

      {/** PRELOADING IMAGES */}
    </Head>
  );
};


/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import Head from 'next/head';

import '@fullcalendar/common/main.css'
import '@styles/fullcalendar/time-grid.main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timeline/main.css'
import '@fullcalendar/resource-timeline/main.css'
import '@styles/globals.css'
import NavBar from '@src/components/NavBar';


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Github Demo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
      </Head>
      <NavBar />
      <Component {...pageProps} />

    </>
  );
};

export default MyApp;

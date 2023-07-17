
import '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/main.css'
import { useEffect } from 'react';
config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  useEffect(() => { 
    require('bootstrap/dist/js/bootstrap.bundle');
  });
  return <Component {...pageProps} />
}

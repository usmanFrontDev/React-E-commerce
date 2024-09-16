
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

<Auth0Provider
    domain="dev-6jnvxms6y6wpb886.us.auth0.com"
    clientId="sLPvqBOU4rfhp0f6sqyf1rm9BrwSlKGr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>


       <App />


</Auth0Provider>


)

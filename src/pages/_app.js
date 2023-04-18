import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
function App({ Component, pageProps }) {
  return (
      <CookiesProvider>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_KEY}>
          <Component {...pageProps} />
        </GoogleOAuthProvider>
      </CookiesProvider>
  ); // 이창수 바보
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;

import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import "../shared/styles/globals.css";
import Layout from "../components/Layout";
import AuthChecker from "../components/AuthChecker";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthChecker>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthChecker>
    </Provider>
  );
}

export default MyApp;

// 랜딩페이지
import "antd/dist/antd.css"; // antd css 전체적으로 골고루 주려면 (특히 별모양)
import "../styles/globals.css"; //
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
// import ApolloSetting from "../src/components/commons/apollo";
import { createUploadLink } from "apollo-upload-client";

function MyApp({ Component, pageProps }: AppProps) {
  const uplodLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uplodLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <ApolloSetting> */}
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
      {/* </ApolloSetting> */}
    </>
  );
}

export default MyApp;

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollTopOnMount from "./components/ScrollTopOnMount";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ScrollTopOnMount />
        <Header />
        <Router />
        <WhatsappButton />
        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

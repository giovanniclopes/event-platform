import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsappButton from "./components/WhatsappButton";
import DevicePopupCorner from "./components/DevicePopupCorner";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Router />
        <DevicePopupCorner />
        <ScrollToTopButton />
        <WhatsappButton />
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

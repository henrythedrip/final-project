import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GameItem from "./components/GameItem";
import GamePage from "./pages/GamePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // possible states include: about, portfolio, resume, contact
  const [selectedPage, setSelectedPage] = useState("gamepage");

  function getPage(state) {
    // console.log(state)
    switch (state) {
      case "gamepage":
        return <GamePage />;
      case "profilepage":
        return <ProfilePage />;
      case "loginpage":
        return <LoginPage />;
      default:
        console.log(state);
        return <GamePage />;
    }
  }

  // console.log("render")
  return (
    <ApolloProvider client={client}>
      <>
        <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        {/* page to show */}
        <div className="content-wrapper">{getPage(selectedPage)}</div>

        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;

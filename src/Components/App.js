import { Router } from "@reach/router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
function App() {
  return (
    // <Layout>
    //   <Home />
    //   <Signup />
    //   <Login />
    //   <Quiz />
    //   <Result />
    // </Layout>
    <>
      <Layout>
        <Router>
          <Home path="/" />
          <Signup path="/signup" />
          <Login path="/login" />
          <Quiz path="/quiz" />
          <Result path="/result" />
        </Router>
      </Layout>
    </>
  );
}
export default App;

import Forms from "./modules/Forms";
import Nav from "./modules/Nav";
import Footer from "./modules/Footer";
import Users from "./modules/Users";
import Manifest from "./modules/Manifest";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
function App() {
  // dvh  svh lvh
  return (
    <Box sx={{ backgroundColor: "#505050" }}>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Box
            variant="h1"
            component="h2"
            sx={{
              textAlign: "center",
              maxHeight: "80vh",
              height: "80vh",
              width: "100vw",
            }}
          >
            <TypeAnimation
              sequence={[
                "print",
                10,
                "print(",
                10,
                'print("Hello',
                10,
                'print("Hello World")',
              ]}
              style={{
                fontSize: "2em",
                fontFamily: "monospace",
                fontWeight: 700,
                textAlign: "center",
                maxHeight: "80vh",
                height: "50vh",
                width: "100vw",
                paddingTop: "30vh",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              wrapper="div"
              className="box"
            />
          </Box>
          <Footer />
        </Route>
        <Route path="/forms">
          <Forms />
          <Footer />
        </Route>
        <Route path="/users">
          <Users />
          <Footer />
        </Route>
        <Route path="/manifest">
          <Manifest />
          <Footer />
        </Route>
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;

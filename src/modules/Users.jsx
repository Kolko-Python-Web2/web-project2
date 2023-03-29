import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { useState, useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa";
import axios from "axios";
export default function EllipsisList() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let usr = {};
  useEffect(() => {
    axios
      .get("http://localhost:8000/dc/users")
      .then((data) => {
        setUsers(data.data.users);
        setLoaded(true);
      })
      .catch((error) => alert(error.response.data.detail));
  }, []);
  users.map((user) => {
    user.roles.map((role) => {
      usr[role] = [];
    });
  });
  users.map((user) => {
    user.roles.map((role) => {
      usr[role].push(user);
    });
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        position: "inherit",
        minHeight: "66vh",
        marginTop: "8vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loaded ? (
        <>
          <Typography
            id="ellipsis-list-demo"
            textTransform="uppercase"
            fontWeight="xl"
            mb={1}
            sx={{
              letterSpacing: "0.15rem",
              fontSize: "1.6rem",
              fontFamily: "Consolas, monospace",
              color: "white",
            }}
          >
            Członkowie
          </Typography>

          <List
            aria-labelledby="ellipsis-list-demo"
            sx={{ "--List-decoratorSize": "56px" }}
          >
            {Object.keys(usr).map((role) => {
              return (
                <ListItem sx={{ display: "block", marginLeft: "5vw" }}>
                  <ListItemContent>
                    <Typography
                      key={role}
                      sx={{
                        textTransform: "uppercase",
                        fontFamily: "Consolas, monospace",
                        marginLeft: "8%",
                        fontWeight: "bold",
                        color: "#ffde57",
                        textShadow: "2px 2px 2px #1976d2",
                      }}
                    >
                      {role}
                    </Typography>
                  </ListItemContent>
                  {usr[role].map((user) => {
                    return (
                      <Typography
                        sx={{
                          padding: ".5em",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ListItemDecorator sx={{ alignItems: "center" }}>
                          <Avatar src={user.avatar} />
                        </ListItemDecorator>
                        <ListItemContent>
                          <Typography
                            level="subtitle1"
                            noWrap
                            sx={{
                              color: "#ffde57",
                              fontFamily: "Consolas, monospace",
                            }}
                          >
                            {user.name}
                          </Typography>
                        </ListItemContent>
                      </Typography>
                    );
                  })}
                </ListItem>
              );
            })}
          </List>
        </>
      ) : (
        <FaCircleNotch icon="spinner" className="spinner" />
      )}
    </Box>
  );
}

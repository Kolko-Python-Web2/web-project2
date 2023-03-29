import React from "react";
import "../Forms.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { FaCircleNotch } from "react-icons/fa";
import { Alert } from "@mui/material";
export default function Forms() {
  const [name, setName] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [group, setGroup] = React.useState("");
  const [groups, setgroups] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");
  const [link, setLink] = React.useState("");
  const check = (message, type) => {
    setMessage(message);
    setType(type);
    setTimeout(() => {
      setMessage("");
      setType("");
      setLink("");
    }, 15000);
  };

  const get = () => {
    group && name && nick
      ? axios
          .post("http://localhost:8000/users", {
            name: name,
            nick: nick,
            group: group,
          })
          .then((data) => {
            setLink(data.data.invitation);
            check("Zostałeś dodany!", "success");
          })
          .catch((error) => {
            check(error.response.data.detail, "error");
          })
      : check("Wypełnij wszystkie pola!", "error");
  };
  const show_link = () => {
    return (
      <span>
        &nbsp;Aby komunikować się z nami zapraszamy na naszego discorda: {link}{" "}
        Uważaj linku możesz użyć tylko raz
      </span>
    );
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/roles")
      .then((data) => {
        setgroups(data.data.roles);
        setLoaded(true);
      })
      .catch((error) => check(error.response.data.detail, "error"));
  }, []);
  return (
    <>
      {message && type && (
        <Alert severity={type}>
          {message}
          {link ? show_link() : null}
        </Alert>
      )}

      <div className="content">
        <div className="container">
          <div className="Name">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Imię Nazwisko"
                variant="standard"
                required
                onInput={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
          </div>
          <div className="Nick">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Nick"
                variant="standard"
                required
                onInput={(e) => {
                  setNick(e.target.value);
                }}
                              />
            </Box>
          </div>
          <div className="radio">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Grupa</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={group}
                name="radio-buttons-group"
                required
                onInput={(e) => {
                  setGroup(e.target.value);
                }}
              >
                {loaded ? (
                  groups.map((group) => (
                    <FormControlLabel
                      value={group}
                      control={<Radio />}
                      label={group}
                    />
                  ))
                ) : (
                  <FaCircleNotch icon="spinner" className="spinner" />
                )}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="Button">
            <Button variant="contained" onClick={get} endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

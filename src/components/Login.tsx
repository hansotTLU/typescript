import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormEvent, useState, useEffect } from "react";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(form);

    // console.log({
    //   username,
    //   password,
    // });
  };

  // useEffect(() => {
  //   console.log("Renders every time");
  // });

  // useEffect(() => {
  //   console.log("Renders first time");
  // }, []);

  // useEffect(() => {
  //   console.log("Renders every time username changes");
  // }, [username]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setForm(prevForm => {
    //   return {
    //   }
    // })

    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={3}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", textTransform: "uppercase", mt: 10 }}
          >
            Login
          </Typography>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            // onChange={(event) => setUsername(event.target.value)}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            // onChange={(event) => setPassword(event.target.value)}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

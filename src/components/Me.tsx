import React, { FormEvent, useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Stack from "@mui/material/Stack"

const Me = ({ name = "Minust" }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ email, message })
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 2 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 2 }}
      >
        {name}
      </Typography>

      <List>
        {["Autod", "Tehnika", "PC mängud"].map((hobby, index) => (
          <ListItem
            key={index}
            sx={{ display: "list-item", listStyleType: "disc" }}
          >
            {hobby}
          </ListItem>
        ))}
      </List>

      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <Stack gap={2}>
          <Typography variant="h5">Kontaktivorm:</Typography>

          <TextField
            label="E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            label="Message"
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
          >
            Saada
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default Me

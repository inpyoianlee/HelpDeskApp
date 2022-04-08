import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Button,
  TextField,
} from "@mui/material";

const AboutUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit() {
    alert("The message has been sent.")
  }

  return (
    <Container>
      <Box>
        <Typography variant="h1" textAlign="center">
          <b>ABOUT US</b>
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          component="img"
          sx={{
            height: 300,
            width: 400,
            padding: "20px",
          }}
          alt="Company picture"
          src="https://thum bs.dreamstime.com/z/happy-company-workers-gather-office-use-laptop-computer-marketing-research-video-call-team-smiling-coworkers-214647077.jpg"
        ></Box>
        <Typography variant="body1" textAlign="left" sx={{ padding: "50px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          aperiam qui voluptas quae maxime voluptate amet possimus magni
          similique suscipit debitis voluptatem, rem odio. Pariatur aliquam
          cupiditate nihil corrupti fuga. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Illo distinctio necessitatibus nobis
          nihil fugit iusto, asperiores provident in incidunt eum molestias quae
          possimus ipsum neque harum esse veniam delectus laudantium. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Ratione nostrum
          reprehenderit labore sint nulla impedit perspiciatis quisquam
          accusamus in? Nemo velit magnam labore voluptas mollitia nesciunt
          temporibus quo commodi voluptate!
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
        }}
        padding={2}
      >
        <Typography variant="h4" textAlign="center">
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} >
              <TextField
                margin="normal"
                value={name}
                required
                id="name"
                label="Your name"
                name="name"
                autoComplete="name"
                onChange={e => setName(e.target.value)}
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                value={email}
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item display="flex" flexDirection="column" xs={12}>
              <Typography variant="overline">Your Message</Typography>
              <TextField 
                marign="normal"
                value={message}
                required
                id="message"
                label="Your message"
                name="message"
                autoComplete="message"
                onChange={e => setMessage(e.target.value)}
                rows={5}
                autoFocus
                multiline
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;

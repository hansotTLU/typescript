import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid2"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
      >
        <Grid size={4}></Grid>

        <Grid size={6}>
          <h1>Doggo</h1>
          <ImageList
            variant="masonry"
            cols={3}
            gap={8}
          >
            {dogPics.map(item => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  position="below"
                  title={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid size={7}>
          <h1>Car</h1>
          <ImageList
            variant="masonry"
            cols={3}
            gap={8}
          >
            {carPics.map(item => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  position="below"
                  title={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  )
}

const carPics = [
  {
    img: "https://imgur.com/f56bFyo.jpg",
    title: "Old Ford",
  },
  {
    img: "https://imgur.com/08c16Ss.jpg",
    title: "Taillight Tuesday",
  },
]

const dogPics = [
  {
    img: "https://imgur.com/l1onVK8.jpg",
    title: "Derp",
  },
  {
    img: "https://imgur.com/vTdryQk.jpg",
    title: "Ball",
  },
]

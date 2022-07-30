import { Box, Stack, IconButton, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const SingleProduct = ({ singleProduct }) => {
  const RestproductName = singleProduct.name.slice(1);

  function Abc() {
    // switch (singleProduct.status) {
    //   case "Free":
    // <IconButton aria-label="download">
    //   <FileDownloadIcon />
    // </IconButton>;
    //     break;
    //   case "Premium":
    //     <IconButton aria-label="download">
    //       <FileDownloadIcon />
    //     </IconButton>;
    //     break;
    // }
    if (singleProduct.status == "Free") {
      return (
        <IconButton aria-label="download">
          <LockOpenIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton aria-label="download">
          <LockIcon />
        </IconButton>
      );
    }
  }

  return (
    <Stack
      direction="column"
      sx={{
        height: "auto",
        minHeight: 250,
        width: "100%",
        maxWidth: { md: "20%", sm: "40%", xs: "100%" },
        borderRadius: 3,
        position: "relative",
        background: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <Box
        component="img"
        alt="This is a dog art"
        flexGrow={1}
        boxSizing="border-box"
        // flexWrap="wrap"
        src={singleProduct.img}
        sx={{
          //   minHeight: { xs: 233, md: 167 },
          //   minWidth: { xs: 233, md: 167 },
          //   width: 300,
          maxHeight: { xs: 233, sm: 250, md: 300 },
          maxWidth: { xs: 550, sm: 600, md: 550 },
          margin: "auto",
          borderRadius: 3,
          padding: 3,
          borderRadius: 9,
        }}
      ></Box>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          position: "absolute",
          borderRadius: 1,
          right: 30,
          top: 20,
          ":hover": { bgcolor: "red" },
        }}
      >
        {/* <IconButton aria-label="edit">
          <EditIcon />
        </IconButton> */}
        {Abc()}
        <Typography variant="p" color="gray">
          {singleProduct.status}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        width="100%"
        justifyContent="center"
        alignItems="baseline"
      >
        <Typography variant="h3">{singleProduct.name.charAt(0)}</Typography>
        <Typography variant="p" color="gray">
          {RestproductName}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ paddingLeft: 3, paddingBottom: 3 }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Download
        </Typography>
        <IconButton aria-label="download">
          <FileDownloadIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default SingleProduct;

import React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
// import Header from "../header"
// import Footer from "../footer";
// import CreateArea from "../createArea"

function Loader() {
	return (
		<Box sx={{ width: "100%" }} id="loader-box">
			<LinearProgress id="loader-circular" />
		</Box>
	);
}

export default Loader;

import React, { useEffect } from "react";
// import Button from "@mui/material/Button";
// import { SnackbarProvider, useSnackbar } from "notistack";

function SnackBar({ useSnackbar, openSnackBar, handleOpenSnackBar }) {
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		if (openSnackBar.status === true) {
			clickOpenSnackBar(openSnackBar.variant)();
			handleOpenSnackBar(false);
		}
	}, [openSnackBar.status]);

	const clickOpenSnackBar = (variant) => () => {
		// variant could be success, error, warning, info, or default
		return enqueueSnackbar(openSnackBar.message, { variant });
	};

	return (
		<React.Fragment>
			{/* <Button onClick={handleClick}>Show snackbar</Button>
			<Button onClick={handleClickVariant("success")}>
				Show success snackbar
			</Button> */}
		</React.Fragment>
	);
}

export default SnackBar;

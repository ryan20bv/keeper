import * as React from "react";
import Button,{useState, useEffect} from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Modal({
	isModalOpen,
	handleCancelDelete,
	itemToDelete,
	handleConfirmDelete,
}) {
	// const [open, setOpen] = React.useState(false);
	// const [scroll, setScroll] = React.useState("paper");

	const descriptionElementRef = React.useRef(null);
	React.useEffect(() => {
		if (isModalOpen) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [isModalOpen]);

	return (
		<div>
			{/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button> */}
			<Dialog
				open={isModalOpen}
				onClose={handleCancelDelete}
				// scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">{itemToDelete.title}</DialogTitle>
				<DialogContent dividers={true}>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						{/* {[...new Array(50)]
							.map(
								() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
							)
							.join("\n")} */}
						{itemToDelete.content}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancelDelete}>Cancel</Button>
					<Button onClick={handleCancelDelete}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

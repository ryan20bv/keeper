import * as React from "react";
import Button, { useState, useEffect } from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { formLabelClasses } from "@mui/material";

// const theme = createTheme({
// 	components: {
// 		DialogTitle: {
// 			styleOverrides: {
// 				root: {
// 					backgroundColor: "f5ba13",
// 				},
// 			},
// 		},
// 	},
// });



export default function Modal({
	isModalOpen,
	handleCancelDelete,
	itemToDelete,
  handleConfirmDelete,
  isEditing,
  itemToEdit
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
				<DialogTitle id="scroll-dialog-title modal-header">
					{isEditing ? "EDIT" : "DELETE"}
				</DialogTitle>
				<DialogTitle
					id="scroll-dialog-title"
					contentEditable={isEditing ? true : false}
					suppressContentEditableWarning={true}
				>
					{isEditing ? itemToEdit.title : itemToDelete.title}
				</DialogTitle>
				<DialogContent dividers={true}>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
						contentEditable={isEditing ? true : false}
						suppressContentEditableWarning={true}
					>
						{isEditing ? itemToEdit.content : itemToDelete.content}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancelDelete}>Cancel</Button>

					{isEditing ? (
						<Button onClick={() => handleConfirmDelete(itemToDelete.id)}>
							Confirm Edit
						</Button>
					) : (
						<Button onClick={() => handleConfirmDelete(itemToDelete.id)}>
							Confirm Delete
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
}

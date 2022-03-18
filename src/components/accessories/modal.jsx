import React,{useState,useRef,useEffect} from "react";
// import Button, { useState, useEffect } from "@mui/material/Button";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { createTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


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
	setIsEditing,
	itemToEdit,
	setItemToEdit,
	handleConfirmEdit,
	handleOpenSnackBar,
	handleCloseModal,
}) {
	// const [open, setOpen] = React.useState(false);
	// const [scroll, setScroll] = React.useState("paper");

	const descriptionElementRef = useRef(null);
	const [anyChanges, setAnyChanges] = useState(false);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setItemToEdit({ ...itemToEdit, [name]: value });
		if (!anyChanges) {
			setAnyChanges(true);
		}
	};
	const handleCheckChanges = (event) => {
		event.preventDefault();
		if (anyChanges) {
      handleConfirmEdit();
      setAnyChanges( false );
		} else {
			setItemToEdit({
				id: "",
				title: "",
				content: "",
			});
			setIsEditing(false);
			handleOpenSnackBar(true, "default", "No changes made!");
			handleCloseModal();
		}
	};

	useEffect(() => {
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
				<DialogTitle id="scroll-dialog-title">
					{isEditing ? (
						<TextField
							autoFocus
							margin="dense"
							id="title"
							name="title"
							label="Title"
							type="text"
							fullWidth
							variant="standard"
							value={itemToEdit.title}
              onChange={( event ) => handleChange( event )}
						/>
					) : (
						itemToDelete.title
					)}
				</DialogTitle>
				<DialogContent
					dividers={true}
					sx={{
						width: 1000,
						maxWidth: "100%",
					}}
				>
					{isEditing ? (
						<TextField
							autoFocus
							margin="dense"
							id="content"
							name="content"
							label="Content"
							type="text"
							fullWidth
							variant="standard"
							value={itemToEdit.content}
							onChange={(event) => handleChange(event)}
              multiline
						/>
					) : (
						<DialogContentText
							id="scroll-dialog-description"
							ref={descriptionElementRef}
							tabIndex={-1}
						>
							{itemToDelete.content}
						</DialogContentText>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancelDelete}>Cancel</Button>

					{isEditing ? (
						<Button onClick={(event) => handleCheckChanges(event)}>
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


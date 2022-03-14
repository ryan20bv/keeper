import React from "react";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Zoom from "@mui/material/Zoom";
// import { v4 as uuidv4 } from "uuid";

const EditArea = ( { itemToEdit,setItemToEdit,setIsEditing,handleConfirmEdit } ) => {
	
	const handleChange = ( event ) => {
		const {name,value} = event.target
		setItemToEdit({...itemToEdit, [name]:value})
	}
	const handleCancel = ( event ) => {
		event.preventDefault();
		setItemToEdit( {} );
		setIsEditing( false );
	}
	return (
		<div>
			<form>
				<input
					name="title"
					placeholder="Edit Title"
					value={itemToEdit.title}
					onChange={(event) => handleChange(event)}
					required
				/>
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					value={itemToEdit.content}
					onChange={(event) => handleChange(event)}
					required
				/>
				<Zoom in={true}>
					<Fab
						onClick={(event) => handleCancel(event)}
						className="edit-btn btn-cancel"
					>
						<CancelIcon />
					</Fab>
				</Zoom>

				<Zoom in={true}>
					<Fab
						className="edit-btn"
						onClick={(event) => handleConfirmEdit(event)}
					>
						<CheckIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
};

export default EditArea;

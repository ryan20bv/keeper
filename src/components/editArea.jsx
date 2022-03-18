import React,{useState} from "react";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Zoom from "@mui/material/Zoom";
// import { v4 as uuidv4 } from "uuid";

const EditArea = ({
	itemToEdit,
	setItemToEdit,
	setIsEditing,
	handleConfirmEdit,
	handleOpenSnackBar,
}) => {
	const [anyChanges, setAnyChanges] = useState(false);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setItemToEdit({ ...itemToEdit, [name]: value });
		if (!anyChanges) {
			setAnyChanges(true);
		}
	};
	const handleCancel = (event) => {
		event.preventDefault();
		setItemToEdit( {
			id: "",
			title: "",
			content:""
		});
		setIsEditing( false );
		handleOpenSnackBar(true, "default", "Edit cancelled!")
	};

	const handleCheckChanges = ( event ) => {
		event.preventDefault();
		if ( anyChanges ) {
			handleConfirmEdit()
		} else {
			setItemToEdit({
				id: "",
				title: "",
				content: "",
			});
			setIsEditing( false );
			handleOpenSnackBar( true, "default", "No changes made!" )
		}
	};

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
						onClick={(event) => handleCheckChanges(event)}
					>
						<CheckIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
};

export default EditArea;

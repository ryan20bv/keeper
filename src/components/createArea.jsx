import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea({ notes, setNotes, handleOpenSnackBar}) {
	const [inputNote, setInputNote] = useState({
		id: "",
		title: "",
		content: "",
	} );
	
	const [isSet, setIsSet] = useState(false);
	

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputNote({
			...inputNote,
			id: uuidv4(),
			[name]: value,
		});
	};

	const handleAdd = (event) => {
		
		console.log("here");
		setNotes([...notes, inputNote]);
		setInputNote({
			id: "",
			title: "",
			content: "",
		} );
		setIsSet( false );
		event.preventDefault();
	};

	return (
		<div>
			<form
				className="create-note"
				onSubmit={(event) => {
					handleAdd(event);
				}}
			>
				{isSet &&
					<input
						onClick={()=>handleOpenSnackBar(true, "success", "Added Successful!")}
						onChange={(event) => handleChange(event)}
						name="title"
						placeholder="Title"
						value={inputNote.title}
						required
					/>
				}
				
				<textarea
					onClick={() => setIsSet(true)}
					onChange={(event) => handleChange(event)}
					name="content"
					placeholder="Take a note..."
					rows={isSet ? "3" : "1"}
					value={inputNote.content}
					required
				/>
				{isSet ? (
					<Zoom in={isSet}>
						<Fab className="btn" type="btn">
							<AddIcon />
						</Fab>
					</Zoom>
				) : (
					""
				)}
			</form>
		</div>
	);
}

export default CreateArea;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

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

	const handleAdd = ( event ) => {
		try {
			event.preventDefault();
			axios
				.post("http://localhost:4001/createNote", inputNote)
				// .then((res) => {
				// 	console.log(res);
				// })
				.then(() => {
					setNotes([...notes, inputNote]);
					handleOpenSnackBar(true, "success", "Added Successful!");
					setInputNote({
						id: "",
						title: "",
						content: "",
					});
					setIsSet(false);
				});
			
		} catch (error) {
			console.log(error)
		}
		
		
	};
	return (
		<div>
			<form
				className="create-note"
				onSubmit={(event) => {
					handleAdd(event);
				}}
			>
				{isSet && (
					<input
						onChange={(event) => handleChange(event)}
						name="title"
						placeholder="Note Title"
						value={inputNote.title}
						required
					/>
				)}

				<textarea
					onClick={() => setIsSet(true)}
					onChange={(event) => handleChange(event)}
					name="content"
					placeholder={isSet ? "Note Content" : "Take a note..."}
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

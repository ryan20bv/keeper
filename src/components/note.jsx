import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note({ title, content, id, handleDelete, handleEdit }) {
	return (
		<div className="note">
			<h1>{title}</h1>
			<p>{content}</p>
			<button className="btn-edit" onClick={() => handleEdit(id)}><EditIcon /></button>
			<button onClick={() => handleDelete(id)}><DeleteIcon /></button>
		</div>
	);
}

export default Note;

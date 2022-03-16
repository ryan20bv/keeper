import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note({ title, content, id, setItemToDelete, handleEdit, handleOpenModal }) {
	
	const handleDelete = () => {
		handleOpenModal()
		setItemToDelete( {
			id: id,
			title: title,
			content:content,
		})
	}
	
	return (
		<div className="note">
			<h1>{title}</h1>
			<p>{content}</p>
			<button className="btn-edit" onClick={() => handleEdit(id)}><EditIcon /></button>
			{/* <button onClick={() => handleDelete(id)}><DeleteIcon /></button> */}
			<button onClick={()=> handleDelete()}><DeleteIcon /></button>
		</div>
	);
}

export default Note;

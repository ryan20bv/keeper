import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/createArea.jsx";
import EditArea from "./components/editArea.jsx";
import Loader from "./components/accessories/loader";
import rawData from "./components/accessories/rawData"
import rawNotes from "./rawNotes";
import SnackBar from "./components/accessories/snackBar";
import { SnackbarProvider, useSnackbar } from "notistack";
import ScrollDialog from "./components/accessories/modal"

function App () {
	// i was inserted
	const [notes, setNotes] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [ itemToEdit, setItemToEdit ] = useState( {} );
	const [ isLoading, setIsLoading ] = useState( true );
	const [ openSnackBar, setOpenSnackBar ] = useState( {
		status: false,
		variant: "",
		message: ""
	})

	useEffect( () => {
		setNotes( [ ...rawData,...rawNotes ] );
		let timerId = setTimeout( ()=>setIsLoading( false ), 3000 );
		return (()=>{clearTimeout(timerId)})
	}, [] )


	const handleDelete = (idToDelete) => {
		const filteredNote = notes.filter((eachNote) => {
			return eachNote.id !== idToDelete;
		});
		setNotes( [ ...filteredNote ] );
		handleOpenSnackBar(true,"warning","Delete success!")
	};

	const handleEdit = (idEdit) => {
		const itemEdit = notes.find((item) => {
			return item.id === idEdit;
		});
		setItemToEdit(itemEdit);
		setIsEditing(true);
	};

	const handleConfirmEdit = () => {
		const index =notes.findIndex( (item) => {
			return (item.id === itemToEdit.id)
		})
	  notes.splice( index, 1, itemToEdit );
		setNotes( [ ...notes ] );
		handleOpenSnackBar( true, "info", "Edit success!" );
		setItemToEdit( {} );
		setIsEditing( false );
	};

	const handleOpenSnackBar = (status, variant = "",message = "") => {
		setOpenSnackBar( {
			status: status,
			variant: variant,
			message:message
		})
	}

	return (
		<div>
			<Header />
			{isEditing ? (
				<EditArea
					itemToEdit={itemToEdit}
					setItemToEdit={setItemToEdit}
					setIsEditing={setIsEditing}
					handleConfirmEdit={handleConfirmEdit}
					handleOpenSnackBar={handleOpenSnackBar}
				/>
			) : (
				<CreateArea
					notes={notes}
					setNotes={setNotes}
					itemToEdit={itemToEdit}
					handleOpenSnackBar={handleOpenSnackBar}
				/>
			)}
			{isLoading ? (
				<Loader />
			) : (
				notes.map((item) => {
					return (
						<Note
							key={item.id}
							title={item.title}
							content={item.content}
							id={item.id}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					);
				})
			)}
			{/* <Note key={1} title="Note title" content="Note content" /> */}
			<SnackbarProvider maxSnack={3}>
				<SnackBar
					useSnackbar={useSnackbar}
					openSnackBar={openSnackBar}
					handleOpenSnackBar={handleOpenSnackBar}
				/>
			</SnackbarProvider>
			<ScrollDialog />
			<Footer />
		</div>
	);
}

export default App;

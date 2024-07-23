import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NoteCard from '../../Components/Cards/NoteCard'
import { MdAdd as MdAddNote } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from "react-modal"
import './Home.css'

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })
  return (
    <>
      <Navbar/>

      <div>
      <NoteCard
         title={"Shift"}
         date={"24th June 2024"}
         content={"Night shift at 20:00"}
         tags={"#work"}
         isPinned={true}
         onEdit={()=> {}}
         onDelete={()=> {}}
         onPinNote={()=> {}}
      />
      </div>




      <button onClick={()=> {
        setOpenAddEditModal({isShown:true, type: "add", data: null});
      }}>
        <MdAddNote />
      </button>
      <Modal 
        isOpen = {openAddEditModal.isShown}
        onRequestClose={()=>{}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)"
          },
        }}
        contentLabel=''
        ariaHideApp={false}
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={()=>{
            setOpenAddEditModal({isShown:false, type: "add", data: null});
          }}
        />
      </Modal>
      
    </>
  )
}

export default Home

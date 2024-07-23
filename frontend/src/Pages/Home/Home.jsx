import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NoteCard from '../../Components/Cards/NoteCard'
import { MdAdd as MdAddNote } from 'react-icons/md'

const Home = () => {
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

      <button onClick={()=> {}}>
        <MdAddNote />
      </button>
    </>
  )
}

export default Home

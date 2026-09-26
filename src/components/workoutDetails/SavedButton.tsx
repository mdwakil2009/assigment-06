"use client"
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkoutLibrary } from '@/type/WorkoutLibrary';
import React, { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const SavedButton = ({library}:{library:IWorkoutLibrary}) => {
     const {saved, setSaved} = useContext(WorkoutContext)
   
     const handleSavedButton = () =>{
     console.log('today plan button triggered' ,library)
     setSaved([...saved , library])
     toast.success(`you have a saved"${library.id}"`)
     }
     return (
        <button className="flex items-center justify-center gap-2 border border-gray-600 px-4 py-2 rounded-xl
        font-bold hover:bg-[#222630] text-white cursor-pointer "
        onClick={()=>handleSavedButton()}>
        <FaBookmark />
        Save for later
      </button>
     );
};

export default SavedButton;
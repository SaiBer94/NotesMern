// NoteCard.jsx
import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';
import './NoteCard.css'; // Import the CSS

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className="note-card">
      <div className="note-card-header">
        <div>
          <h6 className="note-card-title">{title}</h6>
          <span className="note-card-date">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`note-card-pin ${isPinned ? 'pinned' : ''}`}
          onClick={onPinNote}
        />
      </div>
      <p className="note-card-content">{content?.slice(0, 60)}{content?.length > 60 && '...'}</p>
      <div className="note-card-actions">
        <MdCreate className="icon" onClick={onEdit} />
        <MdDelete className="icon" onClick={onDelete} />
      </div>
    </div>
  );
};

export default NoteCard;

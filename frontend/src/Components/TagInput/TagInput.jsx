import React, { useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md';
import './TagInput.css'; // Ensure you have this CSS file

const TagInput = ({ tags, setTags }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addNewTag = () => {
        if (inputValue.trim() !== "" && !tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    }

    return (
        <div className="tag-input-container">
            {tags.length > 0 && (
                <div className="tag-list">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag-item">
                            #{tag}
                            <button className="tag-remove" onClick={() => handleRemoveTag(tag)}>
                                <MdClose />
                            </button>
                        </span>
                    ))}
                </div>
            )}
            <div className="tag-input-area">
                <input
                    type="text"
                    placeholder='Add tags'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button className="tag-add" onClick={addNewTag}>
                    <MdAdd />
                </button>
            </div>
        </div>
    );
}

export default TagInput;

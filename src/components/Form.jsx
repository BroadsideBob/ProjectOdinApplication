import { useState } from "react";
import Input from "./Input";
import "../styles/Form.css";

export default function Form( {title, fields} ) {
    // setting up the variables used to store the inputs of the form and whether or not it's in edit mode, as well as their useState functions
    const [dataFields, setDataFields] = useState(fields);
    const [isEdit, setIsEdit] = useState(true);

    // whenever the input fields are changed, the inputs on react are saved and recorded so that they will remain even if the user switches between edit mode and view mode
    function onChange(e, id) {
        const newDataFields = dataFields.map((field) => field.id === id ? { ...field, value: e.target.value } : field);
        setDataFields(newDataFields);
    }

    // function that gets used when the edit button is clicked
    function editMode() {
        setIsEdit(true);
    }

    // the structure of the form that will be displayed, essentially doing a "for each" loop of the fields map provided by each section to automatically create the requeted inputs using the imported Input constructor
    return (
        <form onSubmit={(e) => { e.preventDefault(); setIsEdit(false); }} className="profile-section">
            <h2>{title}</h2>
            {dataFields.map((field) => (<Input key={field.id} id={field.id} label={field.label} value={field.value} type={field.type} onChange={onChange} isEdit={isEdit}/>))}
            <div className="form-buttons">
                <button type="submit" disabled={!isEdit}>Save</button>
                <button type="button" onClick={editMode}>Edit</button>
            </div>
        </form>
    )
}
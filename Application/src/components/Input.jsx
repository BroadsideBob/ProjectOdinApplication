import "../styles/Input.css";

// displays the name of the field and the input field itself, with it changing to and from a <p> if the form is or isn't in edit mode using an "or" statement
// data validation is built into the input field, so thanks HTML for that one
export default function Input({ id, label, value, type, onChange, isEdit }) {
  return (
    <label>
      {`${label}:`}
      {isEdit ? (
        <input type={type} value={value} onChange={(e) => onChange(e, id)} />
      ) : (
        <p>{value}</p>
      )}
    </label>
  );
} 
import Form from "./Form";

// this and all the other Section components are surprisingly understandable. it first creates a list of input fields using the imported Form component, which then use its imported Input component to translate that into input fields before sorting them out.
// the only thing that changes between the Section components are the fields that are created. this all results in a very easy to adjust and understand structure.
export default function GeneralSection() {
  const fields = [
    { id: 0, label: "Name", value: "", type: "text" },
    { id: 1, label: "Surname", value: "", type: "text" },
    { id: 2, label: "Pronouns", value: "", type: "text" },
    { id: 3, label: "Email", value: "", type: "email" },
    { id: 4, label: "Phone Number", value: "", type: "tel" },
  ];

  return <Form title={"General"} fields={fields} />;
}
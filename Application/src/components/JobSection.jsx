import Form from "./Form";

// see GeneralSection.jsx for my thought process on the Section components.
export default function JobSection() {
  const fields = [
    { id: 0, label: "Company Name", value: "", type: "text" },
    { id: 1, label: "Date From", value: "", type: "date" },
    { id: 2, label: "Date To", value: "", type: "date" },
    { id: 3, label: "Position Title", value: "", type: "text" },
    { id: 4, label: "Main Responsibilities", value: "", type: "text" },
    { id: 5, label: "Reference Email", value: "", type: "email" },
  ];

  return <Form title={"Work Experience"} fields={fields} />;
}
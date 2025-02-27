import Form from "./Form";

// see GeneralSection.jsx for my thought process on the Section components. 
export default function EducationSection() {
  const fields = [
    { id: 0, label: "Name of School", value: "", type: "text" },
    { id: 1, label: "Level of Education", value: "", type: "text" },
    { id: 2, label: "Title of Study", value: "", type: "text" },
    { id: 3, label: "Start Date of Study", value: "", type: "date" },
    { id: 4, label: "End Date of Study", value: "", type: "date" },
  ];

  return <Form title={"Education"} fields={fields} />;
}
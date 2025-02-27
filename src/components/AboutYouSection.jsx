import Form from "./Form";

// felt like the application was missing something. i put on a few miscellaneous things that employers tend to like knowing in its own section to fill it.
export default function AboutYouSection() {
  const fields = [
    { id: 0, label: "Awards", value: "", type: "text" },
    { id: 1, label: "Projects", value: "", type: "text" },
    { id: 2, label: "How you learnt about this position", value: "", type: "text" },
    { id: 3, label: "Disabilities", value: "", type: "text" },
    { id: 4, label: "Misc Information", value: "", type: "text" },
  ];

  return <Form title={"About You"} fields={fields} />;
}
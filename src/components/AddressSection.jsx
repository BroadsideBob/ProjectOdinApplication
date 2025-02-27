import Form from "./Form";

// employers like knowing this stuff, so i thought it weird it wasn't a listed requirement. oh, well, gonna doxx myself anyways.
export default function AddressSection() {
  const fields = [
    { id: 1, label: "Address", value: "", type: "text" },
    { id: 2, label: "Postal Code", value: "", type: "text" },
    { id: 3, label: "City", value: "", type: "text" },
    { id: 4, label: "Country", value: "", type: "text" },
  ];

  return <Form title={"Address"} fields={fields} />;
}
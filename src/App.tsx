import Dropdown, { Option } from "./components/Dropdown/Dropdown";

const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  // Your other options here
];
export default function App() {
  return (
    <>
      <Dropdown
        options={options}
        onOptionChange={(option) => console.log(option)}
      />
    </>
  );
}

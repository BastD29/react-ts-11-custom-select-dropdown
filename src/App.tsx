import Dropdown, { Option } from "./components/Dropdown/Dropdown";

const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

export default function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Dropdown
            options={options}
            // onOptionChange={(option) => console.log(option)}
            onOptionChange={(option) =>
              console.log("Dropdown 1: " + option.label)
            }
          />
        </div>
        <div>
          <Dropdown
            options={options}
            // onOptionChange={(option) => console.log(option)}
            onOptionChange={(option) =>
              console.log("Dropdown 2: " + option.label)
            }
          />
        </div>
      </div>
    </>
  );
}

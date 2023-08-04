import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

export type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  onOptionChange?: (option: Option) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,

  onOptionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggling = () => {
    if (!isOpen) {
      setSelectedOption(null);
    }
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: Option) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onOptionChange?.(value);
  };

  return (
    <div className={`${styles["dropdown"]} ${isOpen ? styles["open"] : ""}`}>
      <div className={styles["dropdown-title"]} onClick={toggling}>
        {isOpen
          ? "status"
          : selectedOption
          ? selectedOption.label
          : "all options"}
      </div>
      {isOpen && (
        <div className={styles["dropdown-list-container"]}>
          <div className={styles["dropdown-list"]}>
            {options.map((option) => (
              <div
                onClick={onOptionClicked(option)}
                className={styles["dropdown-list-item"]}
                key={option.label}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

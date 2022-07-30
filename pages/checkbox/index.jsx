import styles from "../../styles/checkbox.module.css";

const toggleCheckBox = (state) => {
  if (state === "false") {
    return "true";
  } else if (state === "true") {
    return "false";
  }
};

const handleClick = (e) => {
  const targetElem = e.target;
  targetElem.setAttribute(
    "aria-checked",
    toggleCheckBox(targetElem.getAttribute("aria-checked"))
  );
  e.stopPropagation();
  e.preventDefault();
};

const handleKeyDown = (e) => {
  const targetElem = e.target;
  if (e.key === " ") {
    targetElem.setAttribute(
      "aria-checked",
      toggleCheckBox(targetElem.getAttribute("aria-checked"))
    );
    e.stopPropagation();
    e.preventDefault();
  }
};

function Checkbox() {
  return (
    <>
      <h3 id="id-group-label">Sandwich Condiments</h3>
      <div role="group" aria-labelledby="id-group-label">
        <ul className={styles.checkboxes}>
          <li>
            <div
              role="checkbox"
              aria-checked="false"
              tabIndex="0"
              className={styles.checkbox}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            >
              Lettuce
            </div>
          </li>
          <li>
            <div
              role="checkbox"
              aria-checked="true"
              tabIndex="0"
              className={styles.checkbox}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            >
              Tomato
            </div>
          </li>
          <li>
            <div
              role="checkbox"
              aria-checked="false"
              tabIndex="0"
              className={styles.checkbox}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            >
              Mustard
            </div>
          </li>
          <li>
            <div
              role="checkbox"
              aria-checked="false"
              tabIndex="0"
              className={styles.checkbox}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            >
              Sprouts
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Checkbox;

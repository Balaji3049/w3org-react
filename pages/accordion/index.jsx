import React from "react";
import styles from "../../styles/accordion.module.css";

function AccordionGroup() {
  return (
    <div id="accordionGroup" className={styles.accordion}>
      <Accordion title="Personal Information" id={1} defaultOpen>
        <div>
          <fieldset className={styles.fieldset}>
            <p>
              <label htmlFor="cufc1">
                Name<span aria-hidden="true">*</span>:
              </label>
              <input
                type="text"
                value=""
                name="Name"
                id="cufc1"
                className="required"
                aria-required="true"
              />
            </p>
            <p>
              <label htmlFor="cufc2">
                Email<span aria-hidden="true">*</span>:
              </label>
              <input
                type="text"
                value=""
                name="Email"
                id="cufc2"
                aria-required="true"
              />
            </p>
            <p>
              <label htmlFor="cufc3">Phone:</label>
              <input type="text" value="" name="Phone" id="cufc3" />
            </p>
            <p>
              <label htmlFor="cufc4">Extension:</label>
              <input type="text" value="" name="Ext" id="cufc4" />
            </p>
            <p>
              <label htmlFor="cufc5">Country:</label>
              <input type="text" value="" name="Country" id="cufc5" />
            </p>
            <p>
              <label htmlFor="cufc6">City/Province:</label>
              <input type="text" value="" name="City_Province" id="cufc6" />
            </p>
          </fieldset>
        </div>
      </Accordion>
      <Accordion title="Billing Address" id={2}>
        <div>
          <fieldset className={styles.fieldset}>
            <p>
              <label htmlFor="b-add1">Address 1:</label>
              <input type="text" name="b-add1" id="b-add1" />
            </p>
            <p>
              <label htmlFor="b-add2">Address 2:</label>
              <input type="text" name="b-add2" id="b-add2" />
            </p>
            <p>
              <label htmlFor="b-city">City:</label>
              <input type="text" name="b-city" id="b-city" />
            </p>
            <p>
              <label htmlFor="b-state">State:</label>
              <input type="text" name="b-state" id="b-state" />
            </p>
            <p>
              <label htmlFor="b-zip">Zip Code:</label>
              <input type="text" name="b-zip" id="b-zip" />
            </p>
          </fieldset>
        </div>
      </Accordion>
      <Accordion title="Shipping Address" id={3}>
        <div>
          <fieldset className={styles.fieldset}>
            <p>
              <label htmlFor="m-add1">Address 1:</label>
              <input type="text" name="m-add1" id="m-add1" />
            </p>
            <p>
              <label htmlFor="m-add2">Address 2:</label>
              <input type="text" name="m-add2" id="m-add2" />
            </p>
            <p>
              <label htmlFor="m-city">City:</label>
              <input type="text" name="m-city" id="m-city" />
            </p>
            <p>
              <label htmlFor="m-state">State:</label>
              <input type="text" name="m-state" id="m-state" />
            </p>
            <p>
              <label htmlFor="m-zip">Zip Code:</label>
              <input type="text" name="m-zip" id="m-zip" />
            </p>
          </fieldset>
        </div>
      </Accordion>
    </div>
  );
}

function Accordion(props) {
  const { title, children, id, defaultOpen } = props;
  const [open, setOpen] = React.useState(Boolean(defaultOpen))
  return (
    <>
      <h3 onClick={()=>setOpen(prev=>!prev)}>
        <button
          type="button"
          aria-expanded={open}
          className={styles["accordion-trigger"]}
          aria-controls={`sect${id}`}
          id={`accordion${id}id`}
        >
          <span className={styles["accordion-title"]}>
            {title}
            <span className={styles["accordion-icon"]}></span>
          </span>
        </button>
      </h3>
      <div
        id={`sect${id}`}
        role="region"
        aria-labelledby={`accordion${id}id`}
        className={styles["accordion-panel"]}
        hidden={!open}
      >
        {children}
      </div>
    </>
  );
}

export default AccordionGroup;

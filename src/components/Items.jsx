import style from "./Items.module.css";

const Items = ({ items, handleOnChange, flag }) => {
    return <>
        <input
              className="form-check-input"
              type="checkbox"
              value={items}
              id="defaultCheck1"
              onChange={handleOnChange}
            />
            <label className={`form-check-label ${flag && style.checked}`}>
              {items}
            </label>
            <br />
    </>
}

export default Items;
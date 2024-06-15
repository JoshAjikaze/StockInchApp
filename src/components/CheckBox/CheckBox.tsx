import './Checkbox.css'
const CheckBox = () => {
    return (
        <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkbox-checkmark"></span>
        </label>
    )
}

export default CheckBox
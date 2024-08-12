function TextInput({label, name, value, onChange}){
    return (
        <div className="form-group">
            <label>
                {label}
                <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                />
            </label>
        </div>
    )
}

function ChekboxInput({label, name, checked, onChange}){
    return (
        <div className="form-group">
            <label>
                {label}
                <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                />
            </label>
        </div>
    )
}

function RadioButton({label, name, value, checked, onChange}){
    return (
        <div className="form-group">
            <label>
                {label}
                <input
                type='radio'
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                />
            </label>
        </div>
    )
}

function SubmitButton({label}){
    return (
        <div className="form-group">
            <button type="submit">{label}</button>
        </div>
    )
}

export {TextInput, SubmitButton,RadioButton, ChekboxInput}
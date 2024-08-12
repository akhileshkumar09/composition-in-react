import { useState } from "react";
import { TextInput,ChekboxInput,RadioButton,SubmitButton } from "./inputFieldComponents/InputFields";

function Form(){
    const [formData, setFormData] = useState({
        name : '',
        acceptTerms : false,
        gender : ''
    })

    const handleChange = (e)=>{
        const {name, value, type, checked,gender}=e.target
        setFormData((prevData)=>({
            ...prevData,
            [name] : type === 'checkbox'? checked : value,
            [gender] : value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`Your Submitted data is ${JSON.stringify(formData, null, 2)}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
            label='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            />
            <ChekboxInput
            label='Accept Terms and Conditions'
            name = 'acceptTerms'
            checked={formData.acceptTerms}
            onChange={handleChange}
            />
            <div className="form-group">
                <label>Genger</label>
                <RadioButton
                label='Male'
                name='gender'
                value='male'
                checked={formData.gender === 'male'}
                onChange={handleChange}
                />
                <RadioButton
                label='Female'
                name='gender'
                value='female'
                checked={formData.gender === 'female'}
                onChange={handleChange}
                />
            </div>
            <SubmitButton label='Submit'/> 
        </form>
    )
}

export default Form
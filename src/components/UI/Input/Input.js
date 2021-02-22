import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement =
                <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case ('select'):
            inputElement =(
                <select className={inputClasses.join(' ')} onChange={props.changed}>
                    {props.elementConfig["options"].map(option => (
                        <option value={option.value} key={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement =
                <input className={inputClasses.join(' ')} {...props} {...props.elementConfig} value={props.value}/>
            break;
    }

    return (
        <div className={classes.Input}>
            {inputElement}
        </div>
    )
}

export default Input;
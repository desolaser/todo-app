import React from 'react'
import styles from './Form.module.scss'

const Form = props => {
    return (
        <div>
            <div className={styles.title}>{props.title}</div>
            <form className={styles.form} onSubmit={props.handleSubmit}>
                {props.fields.map(field => {
                    return (
                        <div className={styles.formControl}>
                            <label className={styles.formLabel}>{field.labelName}</label>
                            <input className={styles.formInput} type={field.type} value={field.value} onChange={field.onChange} />
                        </div>
                    )
                })}
                <input className={styles.formSubmit} type="submit" value={props.submitValue} />
            </form>
        </div>
    )
}

export default Form
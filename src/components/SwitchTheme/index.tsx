
import React from 'react'
import classNames from 'classnames'
import './style.css'

interface Props {
    checked: boolean
    className?: string
    disabled?: boolean
    onChange?: (event: any) => void
}

export default function (props: Props) {
    return (
        <label
            className={classNames(
                "ba-switch",
                props.className,
                props.disabled && "ba-switch-disabled"
            )}
        >
            <input type="checkbox" 
                checked={props.checked}
                onChange={e => {
                    if (props.disabled) return
                    props.onChange && props.onChange(e)
                }}
            />         
        </label>
    )
}
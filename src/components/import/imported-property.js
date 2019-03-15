import React from 'react';

export  const PropertyItem = ({name, options, onChange, required, value}) => {
    return (
        <select className="hoops_map_select" name={name} required={required} value={value} onChange={onChange}>
            <option>Select</option>
            {
                options.map((option, i) => {
                    return <option key={i} value={option}>{option}</option>
                })
            }
        </select>
    )
};
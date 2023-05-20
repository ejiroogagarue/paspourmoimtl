import React from 'react';

const ProductOptions = ({ name, values, selectedOptions}) => {
    return (
    <fieldset>
        <legend>
            <div>
                {
                    values.map(value => {
                        const id= `options-${name}-${value}`
                        const checked = selectedOptions[name] === value

                        return (
                            <label key={id} htmlFor={id}>
                                <input 
                                   className='sr-only'
                                  type="radio"
                                  id={id}
                                  name={`option-${name}`}
                                  value={value}
                                  checked={checked}
                                  onChange={() => {
                                    setOptions(name,value)
                                  }}
                                />
                                <div >
                                   <span>{value}</span>
                                </div>
                            </label>
                        )
                    })
                }
            </div>
        </legend>
    </fieldset>
    );
};

export default ProductOptions;
import React from "react";

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;

    console.log(currencyOptions)
    console.log(selectedCurrency)
    console.log(onChangeCurrency)
    console.log(onChangeAmount)
    console.log(amount)

    return (
        <div>
            <input 
                type="number" 
                className="input" 
                value={amount} 
                onChange={onChangeAmount}     
            />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

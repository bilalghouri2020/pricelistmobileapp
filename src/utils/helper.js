

export const checkPhoneNumber = (value) => {
    let lastValue = parseInt(value[value.length - 1])
    if (lastValue === NaN) {
        let returningValue = value.slice(0, -1);
        console.log(".........",returningValue)
    }
    return lastValue
}
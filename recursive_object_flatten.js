function flattenObject(obj) {
    if (typeof obj !== 'object') return;
    let flattenObj = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            return flattenObj = {...flattenObj, ...flattenObject(obj[key])};
        }
        flattenObj = {...flattenObj, [key]: obj[key]};
    })
    return flattenObj;
}

let cat = {
    name: 'Jack',
    surname: 'Miau',
    address: {
        country: 'Meowland',
        state: 'State of Meows',
        house: {
            doorNumber: '1',
            floorNumber: '2'
        },
        array: [1,2,3,4,5,6]
    }
};

console.log(flattenObject(cat));
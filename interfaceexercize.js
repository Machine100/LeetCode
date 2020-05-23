"use strict";
exports.__esModule = true;
function getInformation(person) {
    return person.data.address;
}
var villager1 = {
    'data': {
        name: 'Bobo',
        address: 'Dunderville',
        phone: '797-3303',
        notes: {
            note1: 'I am an alchemist',
            note2: 'I am quite skilled'
        }
    }
};
console.log(getInformation(villager1), villager1.data.phone);

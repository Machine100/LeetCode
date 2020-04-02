import { string } from "prop-types"

interface Contact {
    data: {
        name: string
        address: string
        phone: string
        notes: {
            note1: string
            note2: string
        }
    }
}

function getInformation (person: Contact) {
    return person.data.address
}

let villager1:Contact = {
    'data': {
        name: 'Bobo',
        address: 'Dunderville',
        phone: '797-3303',
        notes: {
            note1: 'I am an alchemist',
            note2: 'I am quite skilled'
        }
    }
}

console.log (getInformation(villager1))
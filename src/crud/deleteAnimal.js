import { readAnimals } from "./readAnimals"

export const deleteAnimal = ({ animals, id }) => {
    if( id === 0) {
        animals.splice(0, 1)
    } else {
        animals.splice(id, id)
    }
    readAnimals({ animals })
    console.log(animals)
}
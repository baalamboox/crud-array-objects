import './sass/main.scss'
import { createAnimal } from './crud/createAnimal'
import { readAnimals } from './crud/readAnimals'
const saveAnimal = document.querySelector('#save_animal')
const animals = []
saveAnimal.addEventListener('click', () => {
    createAnimal({ animals })
    readAnimals({ animals })
})
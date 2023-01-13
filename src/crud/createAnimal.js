const animalName = document.querySelector('#animal_name')
const animalURLPhoto = document.querySelector('#animal_url_photo')
export const createAnimal = ({ animals }) => {
    animals.push({
        name: animalName.value,
        url_photo: animalURLPhoto.value
    })
}
import { deleteAnimal } from './deleteAnimal'
const parser = new DOMParser()
const animalContainer = document.querySelector('#animal_container')
export const readAnimals = ({ animals }) => {
    animalContainer.replaceChildren()
    animals.map((item, index) => {
        let animalCard = parser.parseFromString(`
            <div class="col">
                <div class="card shadow">
                    <img src="${ item.url_photo }" class="card-img-top" alt="puppy">
                    <div class="card-body">
                    <h5 class="card-title text-center mb-4">${ item.name }</h5>
                    <div class="d-flex align-items-center justify-content-between">
                        <small class="text-muted">12/01/2022</small>
                        <div>
                            <span class="btn btn-outline-warning" id="edit_${ index }" title="Edit"><i class="fa-solid fa-pen-to-square"></i></span>
                            <span class="btn btn-outline-danger" id="delete_${ index }" title="Delete"><i class="fa-solid fa-trash"></i></span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `, 'text/html')
        animalContainer.appendChild(animalCard.body.firstChild)
        let buttonEdit = document.querySelector(`#edit_${ index }`)
        let buttonDelete = document.querySelector(`#delete_${ index }`)
        buttonEdit.addEventListener('click', () =>  console.log('edit'))
        buttonDelete.addEventListener('click', () => deleteAnimal({ animals, id: index }))
    })
}
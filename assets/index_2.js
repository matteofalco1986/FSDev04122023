let pets = [];

class Pet {
    constructor(_petName, _ownerName, _specimen, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.specimen = _specimen;
        this.breed = _breed;
    }
    compare(otherPet) {
        if (this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase()) {
            return true;
        }
        return false;
    }
}

// Test cases

// const pet1 = new Pet("gigio", "carlo soriani", "gatto", "soriano");
// const pet2 = new Pet("carletto", "ernesto branzilli", "cane", "labrador");
// const pet3 = new Pet("camicio", "carlo soriani", "coniglio", "nano");
// console.log(pet2.compare(pet3));

const createPet = (event) => {
    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let specimen = document.getElementById('specimen').value;
    let breed = document.getElementById('breed').value;
    event.preventDefault();
    let pet = new Pet(petName, ownerName, specimen, breed);
    pets.push(pet);
    addPetToScreen(pet);
    // clearForm();
}


const printPets = () => {
    for (let pet in pets) {
        console.log(pets[pet]);
    }
}

const clearForm = () => {
    document.getElementById("createPet").reset();
}

const addPetToScreen = (pet) => {

    const pets = document.getElementById("pets")
    // Aggiungere un div dentro cui mettere l'animale
    let singleAnimal = document.createElement('div');
    singleAnimal.classList.add("singleAnimal");
    pets.appendChild(singleAnimal);
    singleAnimal.id = pet.petName;
    // aggiungere un paragrafo col nome
    let namePet = document.createElement('p');
    singleAnimal.appendChild(namePet);
    namePet.innerText = "Name: " + pet.petName;
    // aggiungere un paragrafo col owner
    let nameOwner = document.createElement('p');
    singleAnimal.appendChild(nameOwner);
    nameOwner.innerText = "Owner: " + pet.ownerName;
    // aggiungere un paragrafo col specimen
    let specimenPet = document.createElement('p');
    singleAnimal.appendChild(specimenPet);
    specimenPet.innerText = "Specimen: " + pet.specimen;
    // aggiungere un paragrafo col breed
    let breedPet = document.createElement('p');
    singleAnimal.appendChild(breedPet);
    breedPet.innerText = "breed: " + pet.breed;
}


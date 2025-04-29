interface User {
    name: string,
    getName: () => string,
    setName: (name: string) => void
}

// const user: User = {
//     name: "Juan"
// }

class UserClass {
    name: string

    constructor(name: string) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }
}
//Interface
/* const user: UserClass = {
     name: "Juan",
     getName: () => {
         return "David"
     },
     setName: (name: string) => { }
}*/

//Clase

const userClass: UserClass = new UserClass("Juan")

/*Diferencia entre las interfaces y las clases, las clases son un esquema a seguir 
para crear algo mientras que las interfaces permiten cambios y no son rigidas como las clases

-Las interfaces pueden tener metodos pero no pueden tener lógicas
*/
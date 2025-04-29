// Decorador es agregar funcionalidad extra a algo que no lo  tiene

//Example 1: Add a property to a class

function juanApproves<T extends { new(...args: any[]): {} }>(constructor: T, _context: ClassDecoratorContext): T {
    return class extends constructor {
        juan = 'Yes';
    }
}

@juanApproves
class MyClass {
    // test: string; //Ejemplo
    constructor() { }
}

const instance = new MyClass();

// console.log(instance);
console.log((instance as any).juan);

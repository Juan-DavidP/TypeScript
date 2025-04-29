function mayus(_target: any, context: ClassDecoratorContext) {
    return {
        get(this: any) {
            // I superior
            // const user = {
            //     name: "Juan"
            // }
            /* return this["name"] //sirve de forma dinamica 
             y cuando se desconoce la informacion superior*/
            return this[`_${String(context.name)}`].toUpperCase();
        },
        set(this: any, value: string) {
            this[`_${String(context.name)}`] = value.toUpperCase();
        }
    }
}

class Person {
    @mayus
    accessor name: string;

    constructor(name: string) {
        this.name = name;
    }
}
function registrarYModificarArgumentos(
    method: Function,
    context: ClassMethodDecoratorContext
) {
    return function (...args: any[]) {
        const argsModified = args.map((arg) => {
            typeof arg === 'string' ? arg.toUpperCase() : arg;
        })
        console.log(`Method ${String(context.name)} called with arguments: ${argsModified}`);
        return method.apply(this, argsModified)
    }
}

class Saludar {
    @registrarYModificarArgumentos
    saludar(parametro: string) {
        console.log(`Hola ${parametro}`);
    }
}
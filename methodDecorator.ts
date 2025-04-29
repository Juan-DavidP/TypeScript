type methodDecoratorStructure = (
    method: Function,
    context: ClassMethodDecoratorContext
) => PropertyDescriptor | void;

function logMethod(method: Function, context: ClassMethodDecoratorContext) {
    return function (...args: any[]) {
        console.log(`Method ${String(context.name)} called with arguments: ${String(args)}`);
        const result = method.apply(this, args);
        console.log(`Method ${String(context.name)} returned: ${result}`);
    return result;        
    }
}


class Calculadora {
    @logMethod
    sum(a: number, b: number) {
        return a + b;
    }
}

const cal = new Calculadora();
cal.sum(1, 2);
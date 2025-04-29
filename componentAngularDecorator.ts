function Component(config: { selector: string, tempalte: string }) {
    return function (target: any) {
        target.prototype.selector = config.selector;
        target.prototype.selector = config.tempalte;
    }
}

@Component({
    selector: 'app-component',
    tempalte: '<h1>{{titulo}}</h1>'
})
class MyComponent {
    selector!: string;
    template!: string;

    titulo: string = "Soy un componente hecho por Juan"
}
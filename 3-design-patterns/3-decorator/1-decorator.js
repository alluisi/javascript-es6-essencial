// EXEMPLO 1:

function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readonly // sintaxe decorator
    title() { return 'CEO' }
}

// EXEMPLO 2:

@Component({
    selecto: 'app-reactive-favorite-color',
    template: 'Favorite Color: <input type="text" [formControl]="favoriteColorControl">'
})

export class favoriteColorComponet {
    favoriteColorControl = new FormControl('');
}
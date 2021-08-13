/* não é Factory
function FakeUser() {
    this.name: 'Alessandra';
    this.lastName: 'Luisi';
}

const user = new FakeUser();
*/

// Factory
function FakeUser() {
    return {
        name: 'Alessandra',
        lastName: 'Luisi'
    }
}

const user = FakeUser();
// class4
// get ,set

class A {
    _name = 'no name';

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
// read only

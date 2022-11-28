class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(anotherPerson) {
        if (this.age < anotherPerson.age) {
            alert(`${this.name} младше, чем ${anotherPerson.name}`)
        } else if (this.age > anotherPerson.age) {
            alert(`${this.name} старше, чем ${anotherPerson.name}`)
        } else if (this.age === anotherPerson.age) {
            alert(`${this.name} и ${anotherPerson.name} - ровестники`)
        }
    }
}
const person1 = new Person('Maxim', 24)
const person2 = new Person('Svetlana', 36)
const person3 = new Person('Irina', 23)
const person4 = new Person('ilya', 24)

person1.compareAge(person2)
person2.compareAge(person3)
person3.compareAge(person1)
person4.compareAge(person1)
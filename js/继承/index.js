function A() {
    this.name = 'a'
    this.color = ['yello', 'blue']
}
 
function B() {
    this.b = {
        a:'1'
    }
}
 
B.prototype = new A()
 
var b1 = new B()
var b2 = new B()
 
b1.b = {};
console.log(b1.b)
console.log(b2.b)
b1.name = 'bbb'
b1.color.push('black')
 
console.log(b1.name) // ?
console.log(b2.name) // ?
console.log(b1.color) // ?
console.log(b2.color) // ?
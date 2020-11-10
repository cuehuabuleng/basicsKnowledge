var a = {
    name: 'namew',
    func: () => {
        console.log(this.name)
    }
}
a.func();
var fun = a.func;
fun();
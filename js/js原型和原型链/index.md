js原型和原型链   和图片一起看

首先，要明确几个点：

1.在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。因此，它们都会具有对象共有的特点。
即：对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。


2.方法(Function)方法这个特殊的对象，除了和其他对象一样有上述_proto_属性之外，还有自己特有的属性——原型属性（prototype），这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。
原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。

好啦，知道了这两个基本点，我们来看看图。
1.构造函数Foo()
构造函数的原型属性Foo.prototype指向了原型对象，在原型对象里有共有的方法，所有构造函数声明的实例（这里是f1，f2）都可以共享这个方法。

2.原型对象Foo.prototype
Foo.prototype保存着实例共享的方法，有一个指针constructor指回构造函数。

3.实例
f1和f2是Foo这个对象的两个实例，这两个对象也有属性__proto__，指向构造函数的原型对象，这样子就可以像上面1所说的访问原型对象的所有方法啦。

另外：构造函数Foo()除了是方法，也是对象啊，它也有__proto__属性，指向谁呢？

指向它的构造函数的原型对象呗。函数的构造函数不就是Function嘛，因此这里的__proto__指向了Function.prototype。

其实除了Foo()，Function(), Object()也是一样的道理。原型对象也是对象啊，它的__proto__属性，又指向谁呢？

同理，指向它的构造函数的原型对象呗。这里是Object.prototype.最后，Object.prototype的__proto__属性指向null。


总结：1.对象有属性__proto__,指向该对象的构造函数的原型对象。
      2.方法除了有属性__proto__,还有属性prototype，prototype指向该方法的原型对象。


还需要说明的是：prototype是构造器，函数才有的属性

看个例子：

```javascript
function Human(){
		this.height=180;	
		this.say=function(){
			alert("我在说话");
		}
	}
	var he = new Human();
	alert(Human.prototype);//Object Object
	alert(he.prototype);   //undefined

```

1、 he 是 Human的一个实例化对象 ( typeof he = “object” ),但是不是一个函数，所以没有prototype;Human是Function的一个实例，而Function是一个函数，他的实例Human也是一个函数 ( typeof Human = “function” )，所以他们都有prototype。此外Object Array RegExp等也是函数。Math就仅仅是一个new Object() ,不是函数。

2、构造函数的prototype，默认情况下就是一个new Object()还额外添加了一个constructor属性。所以说默认是没有prototype只有__proto__的。



说一下_proto_和prorotype的区别：

	构造函数的原型对象是一个引用类型，是一个对象，他保存在内存中的一个堆中，prototype指向这个堆，new出来的实例用_ptoto_也指向这个堆，并且可以通过_ptoto_来对堆的引用实现属性和方法的添加。

	虽然两者恒等，因为都指向这个堆，但是两者不是赋值关系。两者并没有什么关系，他们这是通过这个堆让我们感觉是一样的。

	_proto_是每个对象都会有的属性，而prototype是 只有函数才会有的属性。




怎么讲：
说到底，什么才是原型呢，其实就是当创建一个函数的时候A， 系统就会在内存中创建一个对象B。每个函数都会有一个属性prototype去指向这个B对象，其实这个B对象就是A的原型对象，称为A的原型。原型对象B中也会有constructor属性，指向A。然后A函数作为构造函数用 new 来创建对象的时候，比如创建了一个a1的实例，这个a1中会有一个_proto_，去指向够着函数A中的prototype原型，也就是B。所以说这个_proto_指向的是自己的构造函数的原型对象。


原型链是对象的有限链，用于实现继承和共享属性。


<!-- http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#execution-context -->

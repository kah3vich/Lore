// Any Type +

//* Тип any - представляет все возможные значения JS. Каждый тип присваивается type any. Следовательно, тип any является универсальным над типом системы типов. Компилятор TS разрешает любые операции над типизированными значениями any. Например:

let myVar: any

myVar[0]
myVar()
myVar.length
new myVar()

//* Во многих случаях это слишком мягко для компилятора TS. т.е. это позволит выполнять операции, о которых мы могли бы знать, что они приводят к ошибке времени выполнения.

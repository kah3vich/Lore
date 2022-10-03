// Unknown Type +

//* Тип unknown - представляет (как и any) все возможные значения JS. Каждый тип присваивается type unknown. Поэтому тип unknown является еще одним универсальным над типом системы типов (наряду с any). Однако компилятор TS не разрешает никаких операций со значениями, типизированными unknown. Кроме того, unknown тип может быть присвоен только типу any. Пример пояснит это:

const myVar: unknown

let myVar1: unknown = myVar // No error
let myVar2: any = myVar // No error
let myVar3: boolean = myVar // Type 'unknown' is not assignable to type 'boolean'

// The following operations on myVar all give the error:
// Object is of type 'unknown'
myVar[0]
myVar()
myVar.length
new myVar()

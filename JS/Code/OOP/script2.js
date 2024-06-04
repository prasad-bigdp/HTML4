import * as o from "./script.js"//named imports,named alias
import prasad from './script.js'//default import
let obj = new o.Manager("prasad", 52, 85222, true)
let obj2 = new Manager("raj", 52, 85222, true)
console.log(prasad(2, 3))
obj.displayData()
obj.name = "shekhar"
console.log(o.Employee.x)
console.log(typeof Employee)
//modules - module systems - common js ,require js
//Es6 module system
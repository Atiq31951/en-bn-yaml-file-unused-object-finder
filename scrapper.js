FOLDER_PATH = "/home/dgdev/workspace/web-spa"
<<<<<<< HEAD
PATTERN_PATH1 = "/home/dgdev/workspace/web-spa/locales/bn.yaml"
=======
PATTERN_PATH1 = "/home/dgdev/workspace/web-spa/locales/en.yaml"
>>>>>>> ca5f0813acc80fef48a41cf073b1d6a7ed1d44ea

let fs = require('fs')
let Patt = require('./Patt')
let Text = require('./Text')

let pattFiles = fs.readFileSync(PATTERN_PATH1 ,'utf8')
let pattAarr = Patt.grabAttNameFromPatt(pattFiles)
let objectPattedArr = Patt.makeObjectPattern(pattAarr)
Text.runTheTask(FOLDER_PATH, objectPattedArr)

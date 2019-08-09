FOLDER_PATH = "/home/dgdev/workspace/web-spa"
PATTERN_PATH1 = "/home/dgdev/workspace/web-spa/locales/en.yaml"

let fs = require('fs')
let Patt = require('./Patt')
let Text = require('./Text')

let pattFiles = fs.readFileSync(PATTERN_PATH1 ,'utf8')
let pattAarr = Patt.grabAttNameFromPatt(pattFiles)
let objectPattedArr = Patt.makeObjectPattern(pattAarr)
Text.runTheTask(FOLDER_PATH, objectPattedArr)

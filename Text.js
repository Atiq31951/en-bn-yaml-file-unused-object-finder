let fs = require('fs')
let patt = []
let pattUsed = []
let notUsedPatt = []

function folderExplorer (currentNode) {
    const filesInTheFolder = fs.readdirSync(currentNode)
    const len = filesInTheFolder.length
    for (let i = 0; i<len; i++) {
        let str = filesInTheFolder[i]
        if ((str.search('.vue') >= 0 || str.search('.js') >= 0 || str.search('.yaml') >=0) &&  (str.search('constants.yaml') < 0 && str.search('bn.yaml') < 0 && str.search(".json") < 0)) {
            checkThisFile(currentNode +"/" + str)
        } else if (isThereAnyDot(str) === -1 && str !== 'node_modules') {
            folderExplorer(currentNode + "/" + str)
            continue
        }
    }
    return
}

function checkThisFile (path) {
    let theFileStreamInThisPath = fs.readFileSync(path ,'utf8')
    let i = 0, len = patt.length

    for (i = 0; i<len; i++) {
        let str = patt[i]
        if (theFileStreamInThisPath.search(str) >= 0) {
            pattUsed[i] = true
        }
    }
}

 function isThereAnyDot (str) {
    let i, len = str.length
    for (i = 0; i<len; i++) {
        if (str[i] === '.') {
            return i
        }
    }
    return -1
 } 

let runTheTask = function (startingNode, objPattedArr) {
    patt = objPattedArr
    let i = 0, len = objPattedArr.length
    for (i=0;i<len;i++) {
        pattUsed[i] = false
    }
    folderExplorer(startingNode)
    for (i = 0; i<len; i++) {
        if (pattUsed[i] === false ) {
            notUsedPatt.push(patt[i]+"\n")
        }
    }
    fs.writeFile("temp.txt",notUsedPatt , (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });
}


module.exports = {
    runTheTask
}
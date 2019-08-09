grabAttNameFromPatt =  function (pattStr) {
    let len = pattStr.length
    let patAttNameArr = []
    let i, j, k
    let tempWord = ""
    let willItBeAddedToTempWord = true
    let colonCounter = 0
    for (i = 0; i <=len; i++) {
        if (pattStr[i] === '-') {
            continue
        }
        else if (pattStr[i] === ':' && willItBeAddedToTempWord) {
            patAttNameArr.push(tempWord)
            tempWord = ""
            willItBeAddedToTempWord = false
        } else if (pattStr.charCodeAt(i) === 10) {
            willItBeAddedToTempWord = true
            continue
        } else if (willItBeAddedToTempWord) {
            tempWord+= pattStr[i]
        }
    }
    return patAttNameArr
}

let makeObjectPattern = function (pattAttNameArr) {
    let len = pattAttNameArr.length
    let i, j, k, cnt = 0
    let objMakingArr = []
    let objPattedArr = []
    let parentSpace = 0
    for (i = 0; i<len; i++) {
        let str = pattAttNameArr[i]
        let prefixNumber = numberOfPrefixSpaces(str, str.length)
        let willItBeAddedToFinalObjArr = false
        if (prefixNumber === 0) {
            objMakingArr[0] = str
            if (pattAttNameArr[i+1] !== undefined && numberOfPrefixSpaces(pattAttNameArr[i+1]) === 0) {
                    willItBeAddedToFinalObjArr = true
            } else if (pattAttNameArr[i+1] === undefined) {
                willItBeAddedToFinalObjArr = true
            }
            if (willItBeAddedToFinalObjArr) {
                objPattedArr.push(makeStringFromArr(objMakingArr, 1))
            }
        } else if (prefixNumber === 2) {
            objMakingArr[1] = str
            if (pattAttNameArr[i+1] !== undefined && numberOfPrefixSpaces(pattAttNameArr[i+1]) === 2) {
                willItBeAddedToFinalObjArr = true
            } else if (pattAttNameArr[i+1] === undefined) {
                willItBeAddedToFinalObjArr = true
            }
            if (willItBeAddedToFinalObjArr) {
                objPattedArr.push(makeStringFromArr(objMakingArr, 2))
            }
        } else if (prefixNumber === 4) {
            objMakingArr[2] = str
            if (pattAttNameArr[i+1] !== undefined && numberOfPrefixSpaces(pattAttNameArr[i+1]) === 4) {
                willItBeAddedToFinalObjArr = true
            } else if (pattAttNameArr[i+1] === undefined) {
                willItBeAddedToFinalObjArr = true
            }
            if (willItBeAddedToFinalObjArr) {
                objPattedArr.push(makeStringFromArr(objMakingArr, 3))
            }
        }
    }
    return objPattedArr
}

let numberOfPrefixSpaces  = function (str) {
    let i, count = 0
    let len = str.length
    for (i = 0; i < len; i++) {
        if (str[i] === ' ') {
            count++
        } else {
            return count
        }
    }
    return count
}

let makeStringFromArr = function (arr, till) {
    let len = arr.length, i
    let str = ""
    for (i = 0; i<till; i++) {
        str += arr[i].trim()
        if (i < len-1) {
            str += "."
        }
    }
    return str
}

module.exports = {
    grabAttNameFromPatt,
    makeObjectPattern
}
function replaceAll(str) {
    var escapedFind = str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    console.log(escapedFind);
}
//usage example
var sentence = "How many shots did Bill take last night? That Bil"
var blameSusan = replaceAll(sentence);
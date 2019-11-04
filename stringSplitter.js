const stringSplitter = function(str, separator){
    //console.log(str);
    if (str === ''){
        return [];
    }
    //checking for the presence of the separator if don't find we are done
    const findindex = str.indexOf(separator);
    if(findindex < 0 ){
        return [str];
    }
    //if finds the separator need to be remove from the string
    //find separator we need before cut everything save it and we need 
    //slice everything after the separator save it. 
    const beforeseparator = str.slice(0, findindex);
    //console.log(beforeseparator);
    const afterseparator = str.slice(findindex+separator.length);
    //console.log(afterseparator);
    //calls the stringSplitter again
    //const newstring = beforeseparator + afterseparator;
    //console.log(newstring);
    //return stringSplitter(newstring, separator)
    return [beforeseparator].concat(stringSplitter(afterseparator, separator));
}
console.log(stringSplitter('3ab2','ab'));





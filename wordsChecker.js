        let minusWords = [];

        let phrasesToCheck = [];

    //finds strings from minusWords array which are substrings of phrasesToCheck strings and pushes them to a newArray
    function arrayChecker(listOfWords, arrayToCheck) {
        let newArray = [];

        for(let word of listOfWords) {
            if(arrayToCheck.find(v => v.includes(word))) {
                newArray.push(word);
            }
        }

        console.log(newArray);
    }
    arrayChecker(minusWords, phrasesToCheck);
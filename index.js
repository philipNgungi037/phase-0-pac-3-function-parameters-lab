function introduction (name) {
    const message = `Hi, my name is ${name}.`;
    return message
}

function introductionWithLanguage(name, language) {
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message
}

function introductionWithLanguageOptional(name, language) {
    const message = `Hi, my name is ${name} and I am learning to program in ${language}`;
    return message;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message
}
class Formatter {
  static capitalize(string) {
    const newString = string.charAt(0).toUpperCase() + string.substring(1, string.length)
    return newString;
  }
  static sanitize(userString) {
    let newString = userString
    if (newString.includes('!')) {
      newString = newString.replace("!", "")
    }
    if (newString.includes('@')) {
      newString = newString.replace("@", "")
    }
    if (newString.includes('#')) {
      newString = newString.replace("#", "")
    }
    if (newString.includes('$')) {
      newString = newString.replace("$", "")
    }
    if (newString.includes('%')) {
      newString = newString.replace("%", "")
    }
    if (newString.includes('^')) {
      newString = newString.replace("^", "")
    }
    if (newString.includes('&')) {
      newString = newString.replace("&", "")
    }
    if (newString.includes('*')) {
      newString = newString.replace("*", "")
    }
    if (newString.includes('_')) {
      newString = newString.replace("_", "")
    }
    if (newString.includes('+')) {
      newString = newString.replace("+", "")
    }
    if (newString.includes('=')) {
      newString = newString.replace("=", "")
    }
    if (newString.includes(':')) {
      newString = newString.replace(":", "")
    }
    if (newString.includes('!')) {
      newString = newString.replace(";", "")
    }
    if (newString.includes('{')) {
      newString = newString.replace("{", "")
    }
    if (newString.includes('}')) {
      newString = newString.replace("}", "")
    }
    if (newString.includes('(')) {
      newString = newString.replace("(", "")
    }
    if (newString.includes(')')) {
      newString = newString.replace(")", "")
    }
    return newString;
  }
  static titleize(title) {
    let capitalizedWord;
    let firstLetter;
    let newTitle;
    let newTitleArray = []
    let titleArray = title.split(" ");
    let firstWord = titleArray[0];
    const capitalizeFirstWord = firstWord.charAt(0).toUpperCase() + firstWord.substring(1, firstWord.length);
    let titleArrayWithoutFirstWord = titleArray.slice(1);
    for (let element of titleArrayWithoutFirstWord) {
      if (element !== "the" && element !== "a" && element !== "an" && 
      element !== "but" && element !== "of" && element !== "and" && 
      element !=="for" && element !== "at" && element !== "by" && 
      element !=="from") {
        firstLetter = element.charAt(0).toUpperCase();
        capitalizedWord = firstLetter + element.substring(1, element.length)
        newTitleArray.push(capitalizedWord);
        debugger
      }
      else newTitleArray.push(element);
      debugger
    }
    newTitleArray.unshift(capitalizeFirstWord);
    newTitle = newTitleArray.join(" ");
    return newTitle;
  }
}
console.log(Formatter.titleize("you are the best in the whole world"))
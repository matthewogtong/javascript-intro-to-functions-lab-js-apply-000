function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var string = input()

  if string === string.toUpperCase() {
    return "I can't hear you!";
  }
  else if string === string.toLowerCase() {
    return "YES INDEED!";
  }
  else if string === "I love you, Grandma." {
    return "I love you, too.";
  }
  else {
    return "I don't understand";
  }
}

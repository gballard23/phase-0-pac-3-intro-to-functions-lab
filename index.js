function shout(string) {
    console.log("I am in the shout function")
    return string.toUpperCase();
} 
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string){
    console.log(shout(string));
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!";
    }
    else if(string === string.toUpperCase()){
        return "YES INDEED!";
    }
    else if(string === "I love you, Grandma."){
        return "I love you, too.";
    }
}
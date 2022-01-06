// Code your solutions in this file
const messages = []; 
function writeCards(names, holiday) { 
    for (let i=0; i < names.length; ++i) { 
        let note = "Thank you, " + names[i] + ", for the wonderful " + holiday + " gift!"; 
        messages.push(note);
    }
    return messages;
}

function countDown(i) {
    let startPoint = i; 
    while(i >= 0) {
        console.log(i);
        --i;
    }
}
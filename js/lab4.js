// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.
function meYeah() {
    return 'Me, yeah Me.<br>';
    
}
function verse1(){
    let output = "";
    output += 'Dude, you dont value <br> What I do for you,<br>';
    output += meYeah() + 'I fight with them all<br>';
    return '<p>' + output + '</p>';
}
function verse2(){
    let output = '';
    output += 'The world wants me, but my heart belongs to you,<br>';
    output += meYeah();
 
    return '<p>' + output + '</p>';
}
function verse3(){
    let output = '';
    output += 'Your confidence is misplaced,<br>When you see me at the Grammys<br>';
    output += 'Then Click a picture with me,<br>and show it to all your friends<br>Because...';
    return '<p>' + output + '</p>';
}
function chorus1(){
    let output = '';
    output += `You're going to play all my songs`;
    return '<p>' + output + '</p>';
}
function chorus2(){
    let output = '';
    output += `When you're driving around`;
    return '<p>' + output + '</p>';
}
function lala(){
    let output = '';
    output += 'La La La, <br>La la la<br>';
    return output;
}
function main(){
    let finalOutput = ''; // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    finalOutput += verse1();
    finalOutput += verse2();
    finalOutput += verse3();
    finalOutput += chorus1();
    finalOutput += lala();
    finalOutput += chorus2();
    finalOutput += lala();
    finalOutput += chorus1();
    finalOutput += lala();
    finalOutput += chorus2();
    finalOutput += lala();

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}
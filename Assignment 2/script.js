let submitButton = document.querySelector('button');
let output = document.querySelector('#output');
let sentence = document.querySelector("#sentence");
let letter = document.querySelector("#letter");

output.style.display = "none";

submitButton.addEventListener('click', () => {
    var exp = new RegExp(letter.value + "(.*)", 'i');
    var data = sentence.value.match(exp);
    console.log(data);
    if (data == null)
        output.children[0].innerHTML = "The letter does not exist in the sentence";
    else
        output.children[0].innerHTML = data[1];
    output.style.display = "block";
});
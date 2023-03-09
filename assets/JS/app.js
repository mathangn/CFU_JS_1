
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)



function uppercase() {

    let length = charLength;
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    password = ""

    for (let i = 0, n = characters.length; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }
    // console.log(password)

    document.getElementById('password__result').value = password;
    return password;

}

document.getElementById("btn").addEventListener("update", uppercase);



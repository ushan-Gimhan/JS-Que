let letters = ['A', 'B', 'C', 'D', 'E', 'F'];

const updateLetters = () => {
    // last letter ek allagnnw
    let lastLetter = letters.pop();
    // mul letter ekt last letter ek set krnw
    letters.unshift(lastLetter);

    // array eke content ek maru krnw
    // document.getElementsByTagName("div")[0].innerText = letters[0];
    // document.getElementsByTagName("div")[1].innerText = letters[1];
    // document.getElementsByTagName("div")[2].innerText = letters[2];
    // document.getElementsByTagName("div")[3].innerText = letters[3];
    // document.getElementsByTagName("div")[4].innerText = letters[4];
    // document.getElementsByTagName("div")[5].innerText = letters[5];

    // array eke content ek maru krnw - with for loop
    // for (let i = 0; i < letters.length; i++) {
    //     document.getElementsByTagName("div")[i].innerText = letters[i];
    // }

    // array eke content ek maru krnw - with map function
    letters.map((item,index) => {document.getElementsByTagName("div")[index].innerText = item});

    console.log(letters);
}

// function ekt intervalekk denw
setInterval(updateLetters, 300);
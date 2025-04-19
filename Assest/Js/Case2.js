
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

const updateColors = () => {

    let lastColor = colors.pop();

    colors.unshift(lastColor);

    colors.map((item,index) => {document.getElementsByTagName("div")[index].style.backgroundColor = item});

    console.log(colors);
}

setInterval(updateColors, 1000);

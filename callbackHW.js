
function getButton() {
    let button = document.createElement('span');
    document.body.append(button);
    button.style.backgroundColor = 'blue';
    button.innerHTML = "example";
    button.style.fontSize = '50px'
    return button;
}

function redButton(button) {
    setTimeout(function() {
        button.style.backgroundColor = 'red';
    }, delay);
};

let delay = 2000;

redButton(getButton(), delay);
console.log('test');
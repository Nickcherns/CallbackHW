
function getButton() {
    let button = document.createElement('span');
    document.body.append(button);
    button.style.backgroundColor = 'blue';
    button.style.fontSize = '50px'
    button.innerHTML = "Example";
    button.className = 'btn';
    return button;
}

function redButton(button) {
    setTimeout(function() {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        button.innerHTML = 'Changed';
    }, delay);
};

let delay = 2000;

redButton(getButton(), delay);
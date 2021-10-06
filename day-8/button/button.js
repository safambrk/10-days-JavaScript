var button = document.createElement('button');
button.id = 'btn';
button.innerHTML = +0;
button.style.width = '96px';
button.style.heigth = '48px';
button.style.fontSize = '24px';
document.body.appendChild(button);

document.getElementById('btn').addEventListener('click', function() {
    let value = document.getElementById('btn').innerHTML;
    value ++;
    document.getElementById('btn').innerHTML = value;
})
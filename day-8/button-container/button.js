const ids = [1, 2, 3, 6, 9, 8, 7, 4];

document.getElementById('btn5')
.addEventListener("click", function() {

    const first = document.getElementById('btn4').innerHTML;
    
    for(let i=ids.length-1; i>0; i--) {
        document.getElementById(`btn${ids[i]}`).innerHTML = document.getElementById(`btn${ids[i-1]}`).innerHTML;
    }
    
    document.getElementById(`btn${ids[0]}`).innerHTML = first;
});

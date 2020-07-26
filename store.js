var ButtonRemove = document.getElementsByClassName('btn-danger')
console.log(ButtonRemove)
for (var i = 0 ; i < ButtonRemove.length ; i++) {
    var button = ButtonRemove[i]
    button.addEventListener('click', function(event) {
        var ButtonClicked = event.target
        ButtonClicked.parentElement.parentElement.remove()
    })
}


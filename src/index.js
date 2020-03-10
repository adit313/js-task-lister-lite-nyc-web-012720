document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.getElementById("submit-btn")
  const clear = document.getElementById("clear-btn")

  submit.addEventListener("click", addtotasks)

  function addtotasks(e) {
    e.preve
    const input = document.getElementById("new-task-description")
    const tasks = document.getElementById("tasks")
    const colorSelect = document.getElementById("color-select")

    var node = document.createElement("LI")
    var textnode = document.createTextNode(input.value)

    node.appendChild(textnode)
    node.insertAdjacentHTML('beforeend', `<span class= "close"> &times </span>`)
    node.style.color = colorSelect.value

    tasks.appendChild(node)
    input.value = ""

    let closebtns = document.getElementsByClassName("close")
  
    for (let i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none'
      })
    }
  }

});

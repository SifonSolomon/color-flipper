const colors = ["blue", "red", "green", "yellow"]
const color = document.getElementById("color")
const button = document.getElementById("button")

const randomNumber = () => {
   return Math.floor(Math.random()* colors.length)
}

button.addEventListener("click", () => {
    const num = randomNumber()
  document.body.style.backgroundColor = colors[num]  
})



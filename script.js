let btn = document.querySelector("button")
btn.addEventListener("click", function (){
    let inputs = document.querySelectorAll("input")
    inputs = Array.from(inputs)
    let values = []
    let z = 0
    inputs.forEach(element => {
        values.push(element.value)
        if(element.value == "") {
            if(element.placeholder == "Y") {
                z = 1
            }
        }
    });
    let [y, a, b, c] = values
    if (z == 1) {
        y = 72.57 + 1.1275*a - 1.3225*c + 1.255*a*b + 1.2513*a*c + 0.8275*b*c + 0.735*a*b*c
        alert(y)
    }
    else {
        c = (y - 72.57 - 1.1275*a  - 1.255*a*b)/(1.2513*a + 0.8275*b + 0.735*a*b - 1.3225)
        alert(c)
    }
})




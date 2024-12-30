const input = document.getElementById('inp');

const btns = document.querySelectorAll('button');

let string = ""

btns.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
        if (btn.innerHTML == "AC") {
            string = ""
            input.value = string
        }else if(btn.innerHTML == "DEL"){
            string = string.substring(0,string.length -1);
            input.value = string
        }else if(btn.innerHTML == "="){
            if (string == "") {
                return
            }else{
                if (string[string.length-1] == "%") {
                    string = +string.substring(0,string.length-1) / 100
                    input.value = string
                }else{
                    string = eval(input.value);
                    input.value = string
                }
            }
        }else{
            string = string + btn.innerHTML
            input.value = string
        }
    })
})
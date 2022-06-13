function insert(num){
  var numero = document.querySelector("#visor").innerHTML
  document.querySelector("#visor").innerHTML = numero + num
}

function clean(){
  document.querySelector("#visor").innerHTML = ""
}

function del(){
  var resultado = document.querySelector("#visor").innerHTML
  document.querySelector("#visor").innerHTML = resultado.substring(
    0,
    resultado.length -1
  )
}

function calc(){
  var resultado = document.querySelector("#visor").innerHTML
  if(resultado){
    document.querySelector("#visor").innerHTML = eval(resultado)
  }
}

const containerTasks = document.getElementById("container-tasks") // Elemento principal
let idTaskCount = 0 // Contador interno de las tareas


function itemInputClick(evt,idItem) { // Función que se ejecuta cada vez que da click al botón

  const itemInputCheck = evt.target; // Elemento input checkbox que recibió el click
  const itemInputCheckValue = itemInputCheck.checked // Valor que tiene el checkbox clickeado
  const parentItemInputCheck = itemInputCheck.parentElement // Se obtiene el padre del elemento clickeado para acceder al texto
  const textItemList = parentItemInputCheck.children[0]; // Se accede al texto para poder acceder a sus propiedades

  // Dependiendo el estado del checkbox el texto se pone de color slateblue cuando está checkeado y se pone negro cuando no
  textItemList.style.color = itemInputCheckValue ? "slateblue" : "black"; 

  console.log("Has dado click en elemento: ", evt.target);
  console.log("El valor del elemento clickeado: ", evt.target.checked);
  console.log("El elemento tiene id: ", idItem);
  console.log("Los hijos del item: ", itemInputCheck.parentElement.children);

}


function addElemento() { // Función que responde al click del botón para agregar tareas

  // Se obtiene el valor del input de usuario
  const inputTaskName = document.getElementById("input-task-name")
  // Esta asignación se hace con una variable temporal porque en la función se obtiene la asignación temporal, si usa la variable global siempre va a mostrar el mismo valor
  const idTaskTmp = idTaskCount

  // Se crean los elementos textItemList e inputItemList que van dentro de cada item de la lista
  const textItemList = document.createElement("span")
  textItemList.classList.add("text-item-list")
  textItemList.innerText = inputTaskName.value

  const inputItemList = document.createElement("input")
  inputItemList.type = "checkbox"
  inputItemList.classList.add("input-item-list")
  // Se asigna un evento click al item de la lista
  inputItemList.addEventListener("click",function(evt){ // Se usa una funcion sin nombre para poder obtener el idTaskTmp temporal, esta se asigna a cada elemento
    itemInputClick(evt,idTaskTmp) // función que obtiene el evento y el id que tiene en ese momento
  })

  // Crear el contentedor de la lista de cada item y agregar todos los elementos
  const listItemContainer = document.createElement("div")
  listItemContainer.classList.add("list-item-container")

  listItemContainer.appendChild(textItemList)
  listItemContainer.appendChild(inputItemList)

  // Se agrega el elemento anterior al contenedor general
  containerTasks.appendChild(listItemContainer)

  // Por cada elemento se va incrementando el valor de la lista generada
  idTaskCount++ // idTaskCount = idTaskCount + 1
  
}
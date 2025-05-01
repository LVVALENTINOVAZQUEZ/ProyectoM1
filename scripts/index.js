class Activity {
    constructor(id, title, description, imgURL){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        
    }
    getAllActivities = () => this.activities;
      

      createActivity = (title, description, imgUrl) => {
        const activity = new Activity(crypto.randomUUID(),title, description, imgUrl);
        const activiteFound = this.activities.find((act) => act.title === title)
        if (activiteFound) return alert("la actividad ya existe")
        this.activities.push(activity);
        return activity;
      }
      deleteActivity(id) {
        this.activities = this.activities.filter((act) => act.id !== id);
        alert("actividad eliminada con éxito")
      }

}

const repository = new Repository();


function eliminarActividad(id){
  repository.deleteActivity(id)

  agregarActividadAlContenedor()
}

function objetoAHtml (actividad){
const {id, title, description, imgURL} = actividad

  const divcontenedor = document.createElement("div")
  const h2Título = document.createElement("h2")
  const span = document.createElement("span")
  const img = document.createElement("img")
  const p = document.createElement("p")
  
  h2Título.innerText = title
  span.innerHTML = "x"
  span.classList.add("x")
  img.src = imgURL
  img.alt = `imagen de la actividad: ${title}`;
  p.innerText = description
  divcontenedor.classList.add("Tarjeta")
  
  span.addEventListener("click", () => eliminarActividad(id));
  
  
  
  divcontenedor.appendChild(h2Título)
  divcontenedor.appendChild(span)
  divcontenedor.appendChild(img)
  divcontenedor.appendChild(p)

  return divcontenedor

}

function agregarActividadAlContenedor(){
  const organizador = document.querySelector("#organizador")
  organizador.innerHTML = ""
const arrayActividades = repository.getAllActivities()
const arrayActividadesHtml = arrayActividades.map(objetoAHtml)

arrayActividadesHtml.forEach((act) => {
  organizador.appendChild(act)
})
}



function handleSubmitClic(evento){
  evento.preventDefault()

  const inputTítulo = document.querySelector("#titulo")
  const inputDescripción = document.querySelector("#descripcion")
  const inputActividad = document.querySelector("#imagen")

  const title =inputTítulo.value
  const description = inputDescripción.value
  const imgURL = inputActividad.value

  if(!title || !description || !imgURL) return alert("Falta información en los campos")

    repository.createActivity(title, description, imgURL)

    agregarActividadAlContenedor()
}


const actividadformbutton = document.querySelector("#actividad-form-button");
actividadformbutton.addEventListener("click", handleSubmitClic)









  






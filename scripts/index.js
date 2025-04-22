class Activity {
    constructor(id, title, descripción, imgURL){
        this.id = id;
        this.title = title;
        this.descripción = descripción;
        this.imgURL = imgURL;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        
    }
    getAllActivities = () => this.activities;
      

      createActivity = (id, title, description, imgUrl) => {
        const activity = new Activity(crypto.randomUUID(), id, title, description, imgUrl);
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

const actividad1 = repository.createActivity("Salir a correr 1", "descripcion", "URL:IMAGEN")
repository.createActivity("Salir a correr 2", "descripcion", "URL:IMAGEN")
repository.createActivity("Salir a correr 3", "descripcion", "URL:IMAGEN")
repository.createActivity("Salir a correr 4", "descripcion", "URL:IMAGEN")
repository.createActivity("Salir a correr 5", "descripcion", "URL:IMAGEN")

repository.deleteActivity(actividad1.id)
console.log(repository.getAllActivities());

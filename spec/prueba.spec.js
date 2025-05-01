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


describe("Clase Activity", function () {
  it("Debe ser una clase", () => {
    expect(typeof Activity).toBe("function");
  });
  it("Puede ser una instancia", () =>{
    const nuevaActividad = new Activity("1", "correr", "salir a correr", "imagen")
    expect(nuevaActividad).toBeInstanceOf(Activity)
    expect(nuevaActividad.id).toBe("1")
    expect(nuevaActividad.title).toBe("correr")
    expect(nuevaActividad.description).toBe("salir a correr")
    expect(nuevaActividad.imgURL).toBe("imagen")
    
  })

  describe('Repositorio con actividades manuales', () => {
    it('getAllActivities() devuelve lo que hay en el array interno', () => {
      const repo = new Repository();
     
      const act = new Activity('id123', 'Clase X', 'Descripción X', 'img.png');
      
    
      repo.activities.push(act);
      
    
      expect(repo.getAllActivities()).toEqual([act]);
    });
  });
  
  describe('API de Repository', () => {
    it('debe exponer los métodos getAllActivities, createActivity y deleteActivity', () => {
      const repo = new Repository();
  
      expect(typeof repo.getAllActivities).toBe('function');
      expect(typeof repo.createActivity).toBe('function');
      expect(typeof repo.deleteActivity).toBe('function');
    });
  });
  
});



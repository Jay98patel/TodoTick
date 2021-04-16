
export interface keyValuePair {
  id: number;
  name: string
}

export interface Skills {
  id: number;
  name: string;
  disable: boolean
}

export class masterData {
  role: keyValuePair[];
  appliedFor: keyValuePair[];
  skills: Skills[];
  region:keyValuePair[];
  buyers:keyValuePair[];
  product:keyValuePair[];
  checkList:keyValuePair[];
  moviesName:keyValuePair[];

  public Role() {
    this.role = [{ id: 1, name: "Student" }, { id: 2, name: "Employee" }];
    return this.role;
  }

  public applyFor() {
    this.appliedFor = [{ id: 1, name: "Web Developer" }, { id: 2, name: "Software developer" }, { id: 3, name: "Tester" }, { id: 4, name: "Technical Support" }];
    return this.appliedFor;
  }

  public skill() {
    this.skills = [{ id: 1, name: "HTML", disable: false }, { id: 2, name: "CSS", disable: false }, { id: 3, name: "JAVAScript", disable: false }, { id: 4, name: "JAVA", disable: false }];
    return this.skills;
  }

  public Region() {
    this.region = [{ id: 1, name: "Valley" }, { id: 2, name: "Platues" },{ id: 3, name: "Mountain" },{ id:4, name: "LandForm" }];
    return this.region;
  }
  public Buyers() {
    this.buyers = [{ id: 1, name: "test2" }, { id: 2, name: "Jay" },{ id: 3, name: "PR" },{ id:4, name: "qwerty" }];
    return this.buyers;
  }

  public Product() {
    this.product = [{ id: 1, name: "Plasma" }, { id: 2, name: "LCD" },{ id: 3, name: "Smart TV" },{ id:4, name: "Android TV" }];
    return this.product;
  }

  public CheckList() {
    this.checkList = [{ id: 1, name: "Prepare Valuable" }, { id: 2, name: "Preview other Listings" },{ id: 3, name: "Discuss Clients gaols" },{ id:4, name: "Discuss Timing and pricing" }];
    return this.checkList;
  }

  public MoviesName(){
    this.moviesName = [{ id: 1, name: "Avengers EndGame" }, { id: 2, name: "Captain America" },{ id: 3, name: "Iron Man" },{ id:4, name: "Thor" }];
    return this.moviesName;
  }
}
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
}
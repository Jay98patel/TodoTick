export interface keyValuePair {
  id: number;
  name: string
}

export class masterData {
  role: keyValuePair[];
  appliedFor: keyValuePair[];

  public Role() {
    this.role = [{ id: 1, name: "Student" }, { id: 2, name: "Employee" }];
    return this.role;
  }

  public applyFor() {
    this.appliedFor = [{ id: 1, name: "Web Developer" }, { id: 2, name: "Software developer" }, { id: 3, name: "Tester" }, { id: 4, name: "Technical Support" }];
    return this.appliedFor;
  }
}
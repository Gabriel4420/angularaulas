export class Pessoa {
  public id: number;
  public name: string;
  public age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getType() {
    if (this.age <= 15) {
      return 'Criança';
    } else if (this.age >= 15 && this.age <= 20) {
      return 'Jovem';
    } else if (this.age >= 20 && this.age <= 50) {
      return 'Adulto';
    } else if (this.age >= 50 && this.age <= 80) {
      return 'Idoso';
    } else if (this.age > 80) {
      return 'Super Sayadin';
    } else {
      return '';
    }
  }
}

let student1 = new Student("Pippo", "De Paolis", 13, "M");
let student2 = new Student("Paperino", "De Paperis", 13, "M");

student1.addGrade(7);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(3);
student1.addGrade(2.5);

student2.addGrade(8);
student2.addGrade(10);
student2.addGrade(10);
student2.addGrade(4);
student2.addGrade(4.5);

console.log(student1.generateCode());
console.log(student1.toString());
console.log(student1.calculateMean());

let teacher = new Teacher("Paperone", "Duck", 80, "M", "Terza media");
console.log("Prima", student1.grades);


teacher.addStudent(student1);
teacher.addStudent(student2);

teacher.addGrade(student1, 2);
//console.log(student1.calculateMean());

console.log("Dopo", student1.grades);
console.log("Media ", teacher.students);
console.log(teacher.bestStudent());
//teacher.bestStudent(teacher.students);
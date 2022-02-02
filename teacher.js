class Teacher{
    constructor(name, surname, age, gender, degree) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
        this.students = [];
    }    

    addStudent(student){
        let hasStudent = (!this.students.some(student => student.generateCode() === student.generateCode()));{
            this.students.push(student);
        }
        // let hasStudent = false;
        // for (const stud of this.students) {
        //     if (stud.generateCode() === student.generateCode()) {
        //         hasStudent = true;
        //     }
        // }
        // if (hasStudent === false) {
        //     this.students.push(student)
        // }
    
    }

    toString(){
        let teacherDesc = "Nome: " + this.name + "\n"
                + "Cognome: " + this.surname + "\n"
                + "Età: " + this.age + "\n";
                + "Classe: " + this.degree + "\n";
    }

    addGrade(student, grade){
        for (const student of this.students) {
            if (student.generateCode() === student.generateCode()){
                if (grade >= 0 && grade <= 10) {
                    student.grades.push(grade);
                }
            }
        }
    }

    bestStudent(){
        if (this.students.length === 0){
            return "Non esiste uno studente migliore";
        }

        let bestStudent = this.students[0];

        for (let i = 0; i < this.students.length; i++){
            const student = this.students[i];
            if(student.calculateMean() > bestStudent.calculateMean()){
                bestStudent = student;
            }
        }
        return bestStudent.toString();
    }
}
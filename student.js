class Student {
    constructor(name, surname, age, gender) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.grades = [];
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 10) {
            this.grades.push(grade);
        }
    }

    calculateMean() {
        let sum = this.grades.reduce((p, c) => p + c, 0);
        if (this.grades.lenght === 0) {
            return -1;
        }
        let mean = sum / this.grades.length;
        return mean;
    }

    generateCode() {
        let now = new Date();
        let actualYear = now.getFullYear();
        let birthYear = actualYear - this.age;
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
        return code;
    }

    toString() {
        let mean = this.calculateMean();
        if (mean === -1){
            mean = "n/a";
        }

        let studentDescription = "Nome: " + this.name + "\n"
            + "Cognome: " + this.surname + "\n"
            + "Età: " + this.age + "\n"
            + "Media: " + mean;
        
        return studentDescription;
    }
}
class Usuario{
    name;
    age;
    email;

    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;

    }



    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }

    //----------------------------------------------
    setAge(age){
        this.age = age
    }
    getAge(){
        return this.age
    }

    //----------------------------------------------
    setEmail(email){
        this.email = email
    }
    getEmail(){
        return this.email
    }
}

module.exports = Usuario
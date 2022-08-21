const Casa = {
    area : 80,
    Quartos : 4,
    Andares : 2,
    Garagem : true,
    Banheiro: 5,
    Piscina : false

};

const alturasAlunos = [1.69, 1.75, 1.59, 1.82, 1.77];

for(let atributos in Casa){

    console.log(atributos, Casa[atributos])
};

for(let alturas of alturasAlunos ){
    console.log(alturas)
};
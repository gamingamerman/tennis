const Player = require("./Player");

//Al crear un jugador se debe indicar si es "male" o "female". Si no se indica nada o no es exactamente "male" o "female", se almacena como "female".
test('Crear un jugador que es instancia de Player', () => {
    const player1 = new Player('Johnnathan', 'man');
    expect(player1.gender).toContain('male','female');
    expect(player1).toBeInstanceOf(Object);
    expect(player1).toBeInstanceOf(Player);
});

test('Consultar el sexo de un jugador y no se modifica', () =>{
    const player1 = new Player("John", "male");
    player1.gender = 'ass'
    expect(player1.gender).toContain('male','female');
    expect(player1).toBeInstanceOf(Object);
    expect(player1).toBeInstanceOf(Player);
})
//Los jugadores se insertan con una fecha de nacimiento que se almacena. Se introduce y se muestra en formato d/m/Y. Debe ser una fecha válida.
test('Se crean jugadores a partir de su fecha de nacimiento', () => {
    const player1 = new Player('Jenny', 'female', '29/05/2022');
    const date = new Date(player1.date_of_birth);
    expect(player1.date_of_birth).toEqual(date);
})
class Player {
    constructor(characterName = "Anon"){
        this.name = characterName;
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        }
    }

    rollAttributes(){
        console.log("Rolling Attributes!");
    }
    
    printCharacter(){
        console.log(this.name);
        console.log(this.attributes);
    }
}

const Player1  = new Player();
const Player2 = new Player("Beegee");

Player1.printCharacter();
Player2.rollAttributes();
Player2.printCharacter();
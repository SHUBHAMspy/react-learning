//*A "class" in Javascript is a bluprint for creating objects that have the same properties & access to the same methods.
/* - They are basically "Syntactic Sugar" on top of setting up prototype chains manually. 
- They contain properties also called fields. Properties or fields can be data or methods.
- Objects can be initialized in two ways:
  1. Using "Class Fields" to set properties with values that will be same for every object i.e static fields or properties.
  2. Using "contructor()" method can be used to set dynamic properties of object. */

  // You can extend from one class to another to access the goodness or methods from parent classes.
  class Character{
    // If you want to initialize values when creating the object, you must include a constructor
    constructor(initialHp = 100){
      this.hp = initialHp
    } 

    // If you want to initialize an instance with a pre-defined value
    // then you can declare without constructor using class fields
    alive = true

    // We can refer to the object calling a method as 'this'
    // 'this' always refers to the current object
    // and then we can access and update the properties of this object being referred
    updateHp(amount){
      const hpNow = this.hp + amount
      if(hpNow <= 0){
        this.hp = 0
        this.alive = false
      }
      else this.hp = hpNow
    }
  }

  class Hero extends Character{
    constructor(hp){
      super(hp)
    }
    inventory = []
    skills=0

    fightEnemy(enemy){
      if(enemy.itemsToLoot) this.inventory.push(enemy.itemsToLoot)
      this.skills++

      enemy.updateHp(enemy.hp * -1)
    }
  }

  class Enemy extends Character{
    constructor(hp,lootToDrop){
      super(hp)
      this.itemsToLoot = lootToDrop
    }
  }

  const character = new Character()
  character.updateHp(100)
  console.log(character.hp)

  const hero = new Hero(200)
  const enemy = new Enemy(100,"Sword of thunder")
  console.log(hero)
  console.log(hero.hp)
  console.log(enemy)
  console.log(enemy.hp)
  hero.fightEnemy(enemy)
  console.log(hero)

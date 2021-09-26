var ele1 = document.body.querySelector(".user_dmg")
var ele2 = document.body.querySelector(".dragon_dmg")
var ele3 = document.body.querySelector(".win_lose")

var dragon_damage = 0
var user_damage = 0
var winlose = 0


while(user_damage < 5 && dragon_damage < 10) {
    var nhits = Number(prompt("How many hits are you going to attempt to hit the dragon with? (up to five)"))

    if (nhits > 5) {
        dragon_damage += 1
    } else {
        dragon_damage += Math.floor(Math.random() * nhits) + 1
    }

    user_damage += Math.floor(Math.random() * 2) + 1


}
if(dragon_damage === 10 ) {
    winlose = 1
}

ele1.innerHTML = "User damage: " + user_damage
ele2.innerHTML = "Dragon damage: " + dragon_damage
if(winlose === 1) {
    ele3.innerHTML = "User wins!"
}
else {
    ele3.innerHTML = "User loses!"
}







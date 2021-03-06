//ДЕФОЛТНЫЕ ЗНАЧЕНИЯ ОБЪЕКТОВ НАЧАЛО
const difficulty = {
    easy: 0,
    normal: 150,
    hard: 300,
    maximum: 600,
    easyArr: [15, 36, 58, 72, 84, 96],
    normalArr: [13, 37, 57, 70, 83, 94],
    hardArr: [11, 38, 55, 70, 81, 92],
    maximumArr: [10, 39, 53, 70, 80, 90],
}
difficulty.present = difficulty.easyArr;

const cardPos = {
    nw      : [10, 10, 153, 186],
    n       : [173, 10, 153, 186],
    ne      : [336, 10, 153, 186],
    w       : [10, 206, 153, 186],
    center  : [173, 206, 153, 186],
    e       : [336, 206, 153, 186],
    sw      : [10, 402, 153, 186],
    s       : [173, 402, 153, 186],
    se      : [336, 402, 153, 186],
}
const mined = {
    nw      : false,
    n       : false,
    ne      : false,
    w       : false,
    center  : false,
    e       : false,
    sw      : false,
    s       : false,
    se      : false,
}
const shop = {
    opened: false,
}
const debuff = {
    poison: false,
    blindness: false,
    bleeding: false,
    dangerous: false,
    fire: false,
}
const buff = {
    adrenalin: false,
    healing: false,
}
function debuffObj() {
    let obj = {};
    Object.assign(obj, debuff)
    return obj;
}
function buffObj() {
    let obj = {};
    Object.assign(obj, buff)
    return obj;
}
const chestDefault = {
    goodChest: {
        type: 'chest',
        hp: '',
        name: 'goodChest',
        inner: null,
        skin: goodChestImg,
        position: null,
        changeCoord: 1,
    },
    badChest: {
        type: 'chest',
        hp: '',
        name: 'badChest',
        inner: null,
        skin: badChestImg,
        position: null,
        changeCoord: 1,
    },
}
const trapDefault = {
    wolfTrap : {
        type: 'trap',
        name: 'wolfTrap',
        hp: 1,
        hpMinMax: [1, 3],
        gold: 1,
        special: 'bleeding',
        skin: wolfTrapImg,
        position: null,
        changeCoord: 1,
    },
    minefield : {
        type: 'trap',
        name: 'minefield',
        hp: 1,
        hpMinMax: [6, 8],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        skin: minefieldImg,
        position: null,
        changeCoord: 1,
    },
    spikes : {
        type: 'trap',
        name: 'spikes',
        hp: 1,
        hpMinMax: [1, 3],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        skin: spikesImg,
        position: null,
        changeCoord: 1,
    },
    tornado : {
        type: 'trap',
        name: 'tornado',
        hp: 1,
        hpMinMax: [1, 1],
        gold: 1,
        special: 'tornado',
        debuff: debuffObj(),
        skin: tornadoImg,
        position: null,
        changeCoord: 1,
    },
    magicLamp : {
        type: 'trap',
        name: 'magicLamp',
        hp: 1,
        hpMinMax: [1, 1],
        gold: 1,
        special: 'magicLamp',
        debuff: debuffObj(),
        skin: magicLampImg,
        position: null,
        changeCoord: 1,
    },
}
const potion = {

}
const weaponDefault = {
    bat: {
        type: 'weapon',
        name: 'bat',
        hp: 1,
        hpMinMax: [1, 4],
        gold: 1,
        special: null,
        area: 'forward',
        skin: batImg,
        position: null,
        changeCoord: 1,
    },
    boomerang: {
        type: 'weapon',
        name: 'boomerang',
        hp: 1,
        hpMinMax: [1, 4],
        gold: 1,
        special: null,
        area: 'forward',
        skin: boomerangImg,
        position: null,
        changeCoord: 1,
    },
    bow: {
        type: 'weapon',
        name: 'bow',
        hp: 1,
        hpMinMax: [5, 8],
        gold: 1,
        special: null,
        area: 'any',
        skin: bowImg,
        position: null,
        changeCoord: 1,
    },
    poisonBottle: {
        type: 'weapon',
        name: 'poisonBottle',
        hp: 1,
        hpMinMax: [1, 1],
        gold: 1,
        special: 'poison',
        area: 'any',
        skin: poisonBottleImg,
        position: null,
        changeCoord: 1,
    },
    crossbow: {
        type: 'weapon',
        name: 'crossbow',
        hp: 1,
        hpMinMax: [5, 8],
        gold: 1,
        special: null,
        area: 'forwardTwo',
        skin: crossbowImg,
        position: null,
        changeCoord: 1,
    },
    dagger: {
        type: 'weapon',
        name: 'dagger',
        hp: 1,
        hpMinMax: [9, 12],
        gold: 1,
        special: null,
        area: 'forward',
        skin: daggerImg,
        position: null,
        changeCoord: 1,
    },
    shuriken: {
        type: 'weapon',
        name: 'shuriken',
        hp: 1,
        hpMinMax: [1, 4],
        gold: 1,
        special: null,
        area: 'cross',
        skin: shurikenImg,
        position: null,
        changeCoord: 1,
    },
    shotgun: {
        type: 'weapon',
        name: 'shotgun',
        hp: 1,
        hpMinMax: [1, 4],
        gold: 1,
        special: null,
        area: 'forwardWall',
        skin: shotgunImg,
        position: null,
        changeCoord: 1,
    },
    raygun: {
        type: 'weapon',
        name: 'raygun',
        hp: 1,
        hpMinMax: [13, 16],
        gold: 1,
        special: null,
        area: 'forwardTwo',
        skin: raygunImg,
        position: null,
        changeCoord: 1,
    },
    tomahawk: {
        type: 'weapon',
        name: 'tomahawk',
        hp: 1,
        hpMinMax: [9, 12],
        gold: 1,
        special: null,
        area: 'diagonally',
        skin: tomahawkImg,
        position: null,
        changeCoord: 1,
    },
    scythe: {
        type: 'weapon',
        name: 'scythe',
        hp: 1,
        hpMinMax: [5, 8],
        gold: 1,
        special: null,
        area: 'scythe',
        skin: scytheImg,
        position: null,
        changeCoord: 1,
    },
    poleaxe: {
        type: 'weapon',
        name: 'poleaxe',
        hp: 1,
        hpMinMax: [9, 12],
        gold: 1,
        special: null,
        area: 'aroundThree',
        skin: poleaxeImg,
        position: null,
        changeCoord: 1,
    },
    shield: {
        type: 'weapon',
        name: 'shield',
        hp: 1,
        hpMinMax: [5, 8],
        gold: 1,
        special: null,
        area: 'shield',
        skin: shieldImg,
        position: null,
        changeCoord: 1,
    },
    flamethrower: {
        type: 'weapon',
        name: 'flamethrower',
        hp: 1,
        hpMinMax: [9, 12],
        gold: 1,
        special: 'fire',
        area: 'aroundFive',
        skin: flamethrowerImg,
        position: null,
        changeCoord: 1,
    },
    mp5: {
        type: 'weapon',
        name: 'mp5',
        hp: 1,
        hpMinMax: [1, 4],
        gold: 1,
        special: null,
        area: 'forwardAll',
        skin: mp5Img,
        position: null,
        changeCoord: 1,
    },
    laserTurret: {
        type: 'weapon',
        name: 'laserTurret',
        hp: 1,
        hpMinMax: [17, 20],
        gold: 1,
        special: null,
        area: 'forwardAll',
        skin: laserTurretImg,
        position: null,
        changeCoord: 1,
    },
    mine: {
        type: 'weapon',
        name: 'mine',
        hp: 1,
        hpMinMax: [13, 16],
        gold: 1,
        special: null,
        area: 'mine',
        skin: mineImg,
        position: null,
        changeCoord: 1,
    },
}
const enemyDefault = {
    alienbug: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [3, 9],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: alienBugImg,
        position: null,
        changeCoord: 1,
    },
    beehive: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [3, 5],
        gold: 1,
        special: 'poison',
        debuff: debuffObj(),
        difficulty: 1,
        skin: beehiveImg,
        position: null,
        changeCoord: 1,
    },
    bowman: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [2, 3],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: bowmanImg,
        position: null,
        changeCoord: 1,
    },
    scorpion: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [1, 3],
        gold: 1,
        special: 'poison',
        debuff: debuffObj(),
        difficulty: 1,
        skin: scorpionImg,
        position: null,
        changeCoord: 1,
    },
    squid: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [2, 6],
        gold: 1,
        special: 'blindness',
        debuff: debuffObj(),
        difficulty: 1,
        skin: squidImg,
        position: null,
        changeCoord: 1,
    },
    skeleton: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [1, 6],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: skeletonImg,
        position: null,
        changeCoord: 1,
    },
    icegolem: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [5, 13],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: icegolemImg,
        position: null,
        changeCoord: 1,
    },
    robotgolem: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [7, 11],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: robotgolemImg,
        position: null,
        changeCoord: 1,
    },
    pikeman: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [1, 4],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: pikemanImg,
        position: null,
        changeCoord: 1,
    },
    troll: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [3, 7],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: trollImg,
        position: null,
        changeCoord: 1,
    },
    jellyfish: {
        type: 'enemy',
        hp: 1,
        hpMinMax: [2, 4],
        gold: 1,
        special: 'electro',
        debuff: debuffObj(),
        difficulty: 1,
        skin: jellyfishImg,
        position: null,
        changeCoord: 1,
    },
}
const bossDefault = {
    tank: {
        type: 'enemy',
        name: 'tank',
        hp: 1,
        hpMinMax: [9, 12],
        gold: 1,
        special: null,
        debuff: debuffObj(),
        difficulty: 1,
        skin: tankImg,
        position: null,
        changeCoord: 1,
    },
    minotaur: {
        type: 'enemy',
        name: 'minotaur',
        hp: 1,
        hpMinMax: [8, 12],
        gold: 1,
        special: 'berserk',
        debuff: debuffObj(),
        difficulty: 1,
        skin: minotaurImg,
        position: null,
        changeCoord: 1,
    },
    hydra3: {
        type: 'enemy',
        name: 'hydra3',
        hp: 1,
        hpMinMax: [14, 20],
        gold: 1,
        special: null,
        hydra2: {
            type: 'enemy',
            name: 'hydra2',
            hp: 1,
            hpMinMax: [13, 18],
            gold: 1,
            special: null,
            debuff: debuffObj(),
            difficulty: 1,
            skin: hydra2Img,
            position: null,
            changeCoord: 1,
        },
        hydra1: {
            type: 'enemy',
            name: 'hydra1',
            hp: 1,
            hpMinMax: [12, 16],
            gold: 1,
            special: null,
            debuff: debuffObj(),
            difficulty: 1,
            skin: hydra1Img,
            position: null,
            changeCoord: 1,
        },
        debuff: debuffObj(),
        difficulty: 1,
        skin: hydra3Img,
        position: null,
        changeCoord: 1,
    },
}
const healDefault = {
    heal1: {
        type: 'heal',
        hp: 1,
        hpMinMax: [3, 5],
        gold: 1,
        special: null,
        skin: heal1Img,
        position: null,
        changeCoord: 1,
    },
    heal2: {
        type: 'heal',
        hp: 1,
        hpMinMax: [1, 2],
        gold: 1,
        special: null,
        skin: heal2Img,
        position: null,
        changeCoord: 1,
    },
    heal3: {
        type: 'heal',
        hp: 1,
        hpMinMax: [1, 2],
        gold: 1,
        special: 'healing',
        skin: heal3Img,
        position: null,
        changeCoord: 1,
    }
}
const goldDeafault = {
    gold: {
        type: 'gold',
        hp: 1,
        hpMinMax: [1, 4],
        skin: goldImg,
        position: null,
        changeCoord: 1,
    },
    diamond: {
        type: 'gold',
        hp: 1,
        hpMinMax: [5, 10],
        skin: diamondImg,
        position: null,
        changeCoord: 1,
    }
}
const playerDefault = {
    type        : 'player',
    hp          : 10,
    maxhp       : 10,
    weapon      : givePlayerWeapon('bow', 10),
    weapon2     : null,
    special     : null,
    skin        : playerImg,
    position    : 'center',
    changeCoord : 1,
    gold        : 0,
    debuff      : debuffObj(),
    buff        : buffObj(),
    afterTornado: false,
    afterMining : false,
    stats       : {
        totalScore: 1,
        // gameDifficulty: easy,
        totalScoreUp: function() {
            this.totalScore++;
            console.log(this.totalScore);
            
        },
    },
}

let weaponArr = [];
for (let key in weaponDefault) {
    weaponArr.push(weaponDefault[key]);
}
let enemyArr = [];
for (let key in enemyDefault) {
    enemyArr.push(enemyDefault[key]);
}
let bossArr = [];
for (let key in bossDefault) {
    bossArr.push(bossDefault[key]);
}
let healArr = [];
for (let key in healDefault) {
    healArr.push(healDefault[key]);
}
let goldArr = [];
for (let key in goldDeafault) {
    goldArr.push(goldDeafault[key]);
}
let chestArr = [];
for (let key in chestDefault) {
    chestArr.push(chestDefault[key]);
}
let trapArr = [];
for (let key in trapDefault) {
    trapArr.push(trapDefault[key]);
}
let cardsArr = [weaponArr, enemyArr, healArr, goldArr, chestArr, trapArr];
//ДЕФОЛТНЫЕ ЗНАЧЕНИЯ ОБЪЕКТОВ КОНЕЦ


//ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ НАЧЛО
function givePlayerWeapon(weapon, hp = 1) {
    let newWeapon = {};
    Object.assign(newWeapon, weaponDefault[weapon]);
    newWeapon.hp = hp;
    return newWeapon;
}
function getImgCoords(pos) {
    switch (pos) {
        case 'nw':
            return [36, 80];
        case 'n':
            return [200, 80];
        case 'ne':
            return [362, 80];
        case 'w':
            return [36, 280];
        case 'center':
            return [200, 280];
        case 'e':
            return [362, 280];
        case 'sw':
            return [36, 480];
        case 's':
            return [200, 480];
        case 'se':
            return [362, 480];
    }
}
function getWeaponImgCoords(pos) {
    if (pos == 'nw') {
        return [12, 94];
    } else if (pos == 'n') {
        return [175, 94];
    } else if (pos == 'ne') {
        return [338, 94];
    } else if (pos == 'w') {
        return [12, 290];
    } else if (pos == 'center') {
        return [175, 290];
    } else if (pos == 'e') {
        return [338, 290];
    } else if (pos == 'sw') {
        return [12, 486];
    } else if (pos == 's') {
        return [175, 486];
    } else if (pos == 'se') {
        return [338, 486];
    }
}
function getDebuffImgCoords(pos) {
    if (pos == 'nw') {
        return [17, 20];
    } else if (pos == 'n') {
        return [180, 20];
    } else if (pos == 'ne') {
        return [343, 20];
    } else if (pos == 'w') {
        return [17, 216];
    } else if (pos == 'center') {
        return [180, 216];
    } else if (pos == 'e') {
        return [343, 216];
    } else if (pos == 'sw') {
        return [17, 412];
    } else if (pos == 's') {
        return [180, 412];
    } else if (pos == 'se') {
        return [343, 412];
    }
}
function getHpInfoCoords(pos) {
    switch (pos) {
        case 'nw':
            return [127,39];
        case 'n':
            return [290,39];
        case 'ne':
            return [453,39];
        case 'w':
            return [127, 235];
        case 'center':
            return [290, 235];
        case 'e':
            return [453, 235];
        case 'sw':
            return [127, 431];
        case 's':
            return [290, 431];
        case 'se':
            return [453, 431];
    }
}
function getWeaponDamageInfoCoords(pos) {
    if (pos == 'nw') {
        return [17, 184];
    } else if (pos == 'n') {
        return [180, 184];
    } else if (pos == 'ne') {
        return [343, 184];
    } else if (pos == 'w') {
        return [17, 380];
    } else if (pos == 'center') {
        return [180, 380];
    } else if (pos == 'e') {
        return [343, 380];
    } else if (pos == 'sw') {
        return [17, 576];
    } else if (pos == 's') {
        return [180, 576];
    } else if (pos == 'se') {
        return [343, 576];
    }
}
function getRandomHp(min, max) {
    let hp = Math.floor(Math.random() * (max - min + 1)) + min;
    return hp;
}
//ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ КОНЕЦ


//МЕХАНИКА ИГРЫ НАЧАЛО
let player = {};
let field = {
    nw: null,
    n: null,
    ne: null,
    w: null,
    center: null,
    e: null,
    sw: null,
    s: null,
    se: null
};
function createNewPlayer() {
    Object.assign(player, playerDefault);
    player.debuff = debuffObj();
    player.debuff = buffObj();
}
function createNewField() {
    field.center = player;
    for (let key in field) {
        if (field[key] == null) {
            field[key] = createNewCard('random');
        }
    }
}
function createNewCard(type) {
    let newCard = {};
    switch (type) {
        case 'random':
            let randomLevel = Math.floor(Math.random() * 100) + 1;
            let randomType = null;
            let checkBoss = 0;
            if (randomLevel < difficulty.present[0]) {
                randomType = weaponArr;
            } else if (randomLevel >= difficulty.present[0] && randomLevel < difficulty.present[1]) {
                randomType = enemyArr;
            } else if (randomLevel >= difficulty.present[1] && randomLevel < difficulty.present[2]) {
                randomType = goldArr;
            } else if (randomLevel >= difficulty.present[2] && randomLevel < difficulty.present[3]) {
                randomType = trapArr;
            } else if (randomLevel >= difficulty.present[3] && randomLevel < difficulty.present[4]) {
                randomType = healArr;
            } else if (randomLevel >= difficulty.present[4] && randomLevel < difficulty.present[5]) {
                randomType = chestArr;
            } else if (randomLevel >= difficulty.present[5]) {
                for (let pos in field) {
                    if (field[pos] != null && (field[pos].name == 'tank' || field[pos].name == 'minotaur' || field[pos].name == 'hydra3' || field[pos].name == 'hydra2')) {
                        checkBoss++;
                    }
                }
                if (checkBoss >= 1) {
                    randomType = enemyArr;
                } else {
                    randomType = bossArr;
                }
            }
            Object.assign(newCard, randomType[Math.floor(Math.random() * randomType.length)]);
            break;
        case 'weapon':
            Object.assign(newCard, weaponArr[Math.floor(Math.random() * weaponArr.length)]);
            break;
        case 'enemy':
            Object.assign(newCard, enemyArr[Math.floor(Math.random() * enemyArr.length)]);
            break;
        case 'heal':
            Object.assign(newCard, healArr[Math.floor(Math.random() * healArr.length)]);
            break;
        case 'gold':
            Object.assign(newCard, goldArr[Math.floor(Math.random() * goldArr.length)]);
            break;
        case 'chest':
            Object.assign(newCard, chestArr[Math.floor(Math.random() * chestArr.length)]);
            break;
        case 'trap':
            Object.assign(newCard, trapArr[Math.floor(Math.random() * trapArr.length)]);
            break;
        case 'boss':
            Object.assign(newCard, bossArr[Math.floor(Math.random() * bossArr.length)]);
            break;
        case 'hydra':
            Object.assign(newCard, bossDefault.hydra3);
            break;
        case 'hydra2':
            Object.assign(newCard, bossDefault.hydra3.hydra2);
            break;
        case 'hydra1':
            Object.assign(newCard, bossDefault.hydra3.hydra1);
            break;
        case 'tank':
            Object.assign(newCard, bossDefault.tank);
            break;
        case 'minotaur':
            Object.assign(newCard, bossDefault.minotaur);
            break;
    }
    if (newCard.type == 'weapon' || newCard.type == 'enemy' || newCard.type == 'heal' || newCard.type == 'gold' || newCard.type == 'trap') 
    {
        newCard.hp = getRandomHp(newCard.hpMinMax[0], newCard.hpMinMax[1]);
    }
    if (newCard.type == 'enemy' || newCard.type == 'trap') {
        newCard.gold = newCard.hp;
        newCard.debuff = debuffObj();
        newCard.debuff = buffObj();
        if (newCard.name && newCard.name == 'tank') {
            newCard.gold *= 3;
        }
    }
    if (newCard.type == 'trap' && newCard.name == 'minefield') {
        newCard.debuff.dangerous = 'red';
    }
    return newCard;
}
function changeWeapon() {
    let wpn = {};
    if (player.weapon != null && player.weapon2 != null) {
        wpn = player.weapon;

        player.weapon = player.weapon2;
        player.weapon2 = wpn;
        drawRefreshField();
    }


    // if (e.offsetX >= 200 && e.offsetX <=235 && e.offsetY >= 10 && e.offsetY <= 45) {
    //     if (player.weapon != null && player.weapon2 != null) {
    //         wpn = player.weapon;
    
    //         player.weapon = player.weapon2;
    //         player.weapon2 = wpn;
    //         drawRefreshField();
    //     }
    // }
}
function sellWeapon() {
    // if (e.offsetX >= 390 && e.offsetX <= 475 && e.offsetY >= 10 && e.offsetY <= 45) {
        if (player.weapon != null) {
            player.gold += +player.weapon.hp;
            if (player.weapon2 != null) {
                player.weapon = player.weapon2;
                player.weapon2 = null;
            } else {
                player.weapon = null;
            }
            drawRefreshField();
        }
    // }
}
function openShop() {
    shop.opened = true;
    canvas.removeEventListener('click', movePlayer);
    drawShop();
    canvas.addEventListener('click', shoping);
}
function closeShop() {
    shop.opened = false;
    canvas.removeEventListener('click', shoping);
    canvas.addEventListener('click', movePlayer);
    drawRefreshField();
}
function shoping(e) {
    let heal1 =         [65, 165, 65, 120, 30];
    let heal5 =         [65, 165, 145, 200, 150];
    let randomTrap =    [65, 165, 225, 280, 70];
    let arrows =        [65, 165, 305, 360, 100];
    let ammo =          [65, 165, 385, 440, 50];
    let tornado =       [65, 165, 465, 520, 80];
    if (e.offsetX >= heal1[0] && e.offsetX <= heal1[1] && e.offsetY >= heal1[2] && e.offsetY <= heal1[3]) {
        console.log('хилка 1');
        heal(1);
    } else if (e.offsetX >= heal5[0] && e.offsetX <= heal5[1] && e.offsetY >= heal5[2] && e.offsetY <= heal5[3]) {
        console.log('хилка 5');
        heal(5);
    } else if (e.offsetX >= randomTrap[0] && e.offsetX <= randomTrap[1] && e.offsetY >= randomTrap[2] && e.offsetY <= randomTrap[3]) {
        console.log('Убрать рандомную ловушку');
        randomTrapFunc();
    } else if (e.offsetX >= arrows[0] && e.offsetX <= arrows[1] && e.offsetY >= arrows[2] && e.offsetY <= arrows[3]) {
        console.log('Поддержка с воздуха');
        attackAllEnemies();
    } else if (e.offsetX >= ammo[0] && e.offsetX <= ammo[1] && e.offsetY >= ammo[2] && e.offsetY <= ammo[3]) {
        console.log('Прибавка к оружию');
        ammoPlus();
    } else if (e.offsetX >= tornado[0] && e.offsetX <= tornado[1] && e.offsetY >= tornado[2] && e.offsetY <= tornado[3]) {
        console.log('Торнадо');
        tornadoFunc();
    }

    function heal(num) {
        if (player.gold >= num * heal1[4]) {
            player.hp += num;
            player.gold -= num * heal1[4];
            if (player.hp > playerDefault.hp) {
                player.hp = playerDefault.hp;
            }
            closeShop();
        } else {
            alert('Недостаточно золота');
            closeShop();
        }
    }
    function randomTrapFunc() {
        if (player.gold >= randomTrap[4]) {
            let arr = [];
            for (let pos in field) {
                if (field[pos].type == 'trap') {
                    arr.push(pos);
                }
            }
            if (arr.length >= 1) {
                let num = Math.floor(Math.random() * arr.length);
                killEnemy(arr[num]);
                player.gold -= randomTrap[4];
                closeShop();
            } else {
                alert('На поле нет ловушек');
                closeShop();
            }
            closeShop();
        } else {
            alert('Недостаточно золота');
            closeShop();
        }
    }
    function attackAllEnemies() {
        if (player.gold >= arrows[4]) {
            let i = 0;
            for (let pos in field) {
                if (field[pos].type == 'enemy') {
                    field[pos].hp -= 2;
                    if (field[pos].type == 'enemy' && field[pos].hp <= 0) {
                        killEnemy(pos);
                    }
                    i++;
                }
            }
            if (i > 0) {
                player.gold -= arrows[4];
                closeShop();
            } else {
                alert('На поле нет врагов');
                closeShop();
            }
        } else {
            alert('Недостаточно золота');
            closeShop();
        }
    }
    function ammoPlus() {
        if (player.gold >= ammo[4]) {
            if (player.weapon != null && player.weapon.name != 'poisonBottle') {
                player.weapon.hp = +player.weapon.hp + 2;
                player.gold -= ammo[4];
                closeShop();
            } else {
                alert('У вас нет оружия, или у вас бутылка с ядом, которую нельзя улучшить');
                closeShop();
            }
        } else {
            alert('Недостаточно золота');
            closeShop();
        }
    }
    function tornadoFunc() {
        if (player.gold >= tornado[4]) {
            let newField = [];
            for (let pos in field) {
                newField.push(field[pos]);
                newField.sort(function() {
                    return Math.random() - 0.5;
                });
            }
            let ind = 0;
            for (let pos in field) {
                field[pos] = newField[ind];
                ind++;
            }
            player.gold -= tornado[4];
            closeShop();
        } else {
            alert('У вас недостаточно золота');
            closeShop();
        }
    }
}
function tabloFuncs(e) {
    if (e.offsetX >= 200 && e.offsetX <=235 && e.offsetY >= 10 && e.offsetY <= 45) {
        changeWeapon();
    } else if (e.offsetX >= 390 && e.offsetX <= 475 && e.offsetY >= 10 && e.offsetY <= 45) {
        sellWeapon();
    } else if (e.offsetX >= 270 && e.offsetX <= 360 && e.offsetY >= 10 && e.offsetY <= 40) {
        if (shop.opened == false) {
            openShop();
        } else if (shop.opened == true) {
            closeShop();
        }
    }
}
function startGame() {
    createNewPlayer();
    createNewField();
    canvas.addEventListener('click', movePlayer);
    tablo.addEventListener('click', tabloFuncs);
    // tablo.addEventListener('click', changeWeapon);
    // tablo.addEventListener('click', sellWeapon);
    // tablo.addEventListener('click', openShop);
    // canvas.addEventListener('click', drawRefreshField);
}
function gameOver() {
    let totalScore = player.stats.totalScore;
    ctx.clearRect(0, 0, 499, 598);
    ctx2.clearRect(0, 0, 499, 55);
    clearAllIntervals();

    console.log('Вы проиграли');
    
    canvas.removeEventListener('click', movePlayer);
    tablo.removeEventListener('click', tabloFuncs);
    setTimeout(() => {
        for (let pos in field) {
            field[pos] = null;
        }
        player = {};
    }, 1);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(100, 100, 100)';
    ctx.lineWidth = 3;
    ctx.rect(20, 170, 459, 250);
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('You died', 250, 220);
    ctx.closePath();

    setTimeout(() => {
        ctx.beginPath();
        ctx.fillStyle = 'grey';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Play again?', 250, 260);
        ctx.closePath();
    }, 1000);

    setTimeout(() => {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(100, 100, 100)';
        ctx.lineWidth = 3;
        ctx.fillStyle = 'grey';
        ctx.font = '34px Arial';
        ctx.textAlign = 'center';

        ctx.rect(40, 280, 120, 65);
        ctx.fillText('Yes', 100, 322);

        ctx.rect(339, 280, 120, 65);
        ctx.fillText('No', 399, 322);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Your score: ${totalScore}`, 250, 400);
        ctx.closePath();

        ctx.closePath();
        canvas.addEventListener('click', agreeNewGame);
    }, 2000);

    function agreeNewGame(event) {
        if (event.offsetX >= 40 && event.offsetX <= 160 && event.offsetY >= 280 && event.offsetY <= 345) {
            ctx.clearRect(0, 0, 499, 598);
            startGame();
            player.weapon = givePlayerWeapon('bow', 10);
            player.stats.totalScore = 1;
            difficulty.present = difficulty.easyArr;
            // drawFieldOnload();
            // drawCardsOnload();
            drawRefreshField();
            canvas.removeEventListener('click', agreeNewGame);
        }
    }


    // ctx.drawImage(field[card].skin, getImgCoords(card)[0], getImgCoords(card)[1], 100, 100);

    // ctx.fillStyle = 'red';
    // ctx.textAlign = 'left';
    // ctx.font = '24px Arial';
    // ctx.fillText(field[card].hp, getHpInfoCoords(card)[0], getHpInfoCoords(card)[1]);

}
function debuffStep() {
    for (let pos in field) {
        if (field[pos] != null && field[pos].debuff != undefined) {
            if (field[pos].debuff.poison == true) {
                if (field[pos].hp > 1) {
                    field[pos].hp--;
                } else {
                    field[pos].debuff.poison = false;
                }
            }
            if (field[pos].debuff.blindness > 0) {
                field[pos].debuff.blindness--;
            } else {
                field[pos].debuff.blindness = false;
            }
bleeding:   if (field[pos].debuff.bleeding > 0) {
                if (field[pos].debuff.bleeding % 2 == 0) {
                    field[pos].hp--;
                }
                field[pos].debuff.bleeding--;
            } else {
                field[pos].debuff.bleeding = false;
            }
fire:       if (field[pos].debuff.fire > 0) {
                if (field[pos].hp > 0) {
                    field[pos].hp -= Math.ceil(field[pos].debuff.fire / 2);
                }
                field[pos].debuff.fire -= Math.ceil(field[pos].debuff.fire / 2);
            } else {
                field[pos].debuff.fire = false;
            }
            if (field[pos].debuff.dangerous == 'red') {
                field[pos].debuff.dangerous = 'yellow';
            } else if (field[pos].debuff.dangerous == 'yellow') {
                field[pos].debuff.dangerous = 'green';
            } else if (field[pos].debuff.dangerous == 'green') {
                field[pos].debuff.dangerous = 'red';
            }
        }
        if (field[pos] != null && field[pos].buff != undefined) {
            if (field[pos].buff.healing > 0) {
                // console.log('Бафф лечение');
                field[pos].hp++;
                field[pos].buff.healing--;
                if (player.hp > playerDefault.hp) {
                    player.hp = playerDefault.hp;
                }
            } else {
                field[pos].buff.healing = false;
            }
        }
        if ((field[pos].type == 'enemy' || field[pos].type == 'trap') && field[pos].hp <= 0) {
            killEnemy(pos);
            drawRefreshField();
            // break bleeding;
        }
    }
}
function takeOneStep() {
    player.stats.totalScoreUp();
    if (player.stats.totalScore == difficulty.easy) {
        difficulty.present = difficulty.easyArr;
        // console.log('Уровень повышен до easy');
        
    } else if (player.stats.totalScore == difficulty.normal) {
        difficulty.present = difficulty.normalArr;
        console.log('Уровень повышен до normal');
        
    } else if (player.stats.totalScore == difficulty.hard) {
        difficulty.present = difficulty.hardArr;
        console.log('Уровень повышен до hard');
        
    } else if (player.stats.totalScore == difficulty.maximum) {
        difficulty.present = difficulty.maximumArr;
        console.log('Уровень повышен до maximum');
        
    }
    // debuffStep();
    // drawRefreshField();
    // debuffPlayerStep();
}
function useEnemySpecial(enemy) {
    switch (enemy.special) {
        case 'poison':
            player.hp += 1;
            player.buff.healing = false;
            player.debuff.poison = true;
            // console.log(player.debuff);
            break;
        case 'blindness':
            player.debuff.blindness = 3;
            // console.log(player.debuff);
            break;
        case 'bleeding':
            player.debuff.bleeding = 8;
            // console.log(player.debuff);
            break;
        default:
            break;
    }
}
function useWeaponSpecial(pos) {
    switch (player.weapon.special) {
        case 'poison':
            if (field[pos].name != 'tank') {
                field[pos].debuff.poison = true;
            }
            break;
        case 'fire':
            if ((field[pos].type == 'enemy' || field[pos].type == 'trap') && field[pos].name != 'tank') {
                field[pos].debuff.fire = 6;
            }
            break;
        default:
            break;
    }
}
function checkPlayerWeapon() {
    if (player.weapon != null && player.weapon.hp <= 0/*  && player.weapon.name != 'mine' */) {
        player.weapon = null;
        console.log('Оружие сломалось');
        // deletePlayerWeapon();
    } else if (player.weapon == null) {
        return 'without';
    } else {
        return player.weapon.area;
    }
    if (player.weapon == null && player.weapon2 != null) {
        player.weapon = player.weapon2;
        player.weapon2 = null;
    }
}
function chooseAttackEnemyArea(pos, from, area = 'forward') {
    let damage = 0;
    function checkMinotaur(pos) {
        if (field[pos].name == 'minotaur' && field[pos].special == 'berserk' && field[pos].hp > 0) {
            field[pos].special = null;
            field[pos].hp += 30;
            field[pos].gold += 30;
            field[pos].debuff.bleeding = 60;
        }
    }
    function checkTank(pos) {
        let weapons = ['raygun', 'machinegun', 'flamethrower', 'mine', 'shotgun', 'mp5'];
        if (field[pos].name == 'tank' && field[pos].hp >= 5 && !weapons.includes(player.weapon.name)) {
            return true;
        } else {
            return false;
        }
    }
    function canAttack(pos) {
        if (pos != null && (field[pos].type == 'enemy' || field[pos].type == 'trap')) {
            return true;
        } else {
            return false;
        }
    }
    function attackWithoutWeapon(pos) {
        if (field[pos].name == 'hydra3' || field[pos].name == 'hydra2' || field[pos].name == 'tank' || field[pos].name == 'minotaur') {
            player.hp = 0;
        } else {
            debuffStep();
            if (player.hp > field[pos].hp) {
                player.hp -= field[pos].hp;
                player.gold += field[pos].gold;
                field[pos].hp = 0;
                field[pos] = player;
                // field[from] = null;
            } else {
                field[pos].hp -= player.hp;
                player.hp = 0;
            }

            takeOneStep();
        }
    }
    function attackShield(pos) {
        if (field[pos].name == 'hydra3' || field[pos].name == 'hydra2' || field[pos].name == 'tank' || field[pos].name == 'minotaur') {
            gameOver();            
        } else {
            debuffStep();

            if (player.weapon.hp > field[pos].hp) {
                player.weapon.hp -= field[pos].hp;
                field[pos].hp = 0;
                field[pos] = player;
                field[from] = null;
            } else {
                field[pos].hp -= player.weapon.hp;
                player.weapon.hp = 0;
                player.hp -= field[pos].hp;
                field[pos] = player;
                field[from] = null;
            }
            takeOneStep();
        }
    }
    function attackForward(pos) {
        if (checkTank(pos)) {
            clearInterval(playerVibroInterval);
            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
        } else {
            debuffStep();

            if (player.weapon.hp >= field[pos].hp) {
                damage = field[pos].hp;
                player.weapon.hp -= damage;
                field[pos].hp = 0;
                takeOneStep();
            } else {
                checkMinotaur(pos);
                damage = player.weapon.hp;
                field[pos].hp -= damage;
                player.weapon.hp = 0;
                // debuffStep();
                takeOneStep();
                vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                // drawRefreshField();
            }
        }
    }
    function attackAny(pos) {
        if (checkTank(pos)) {
            clearInterval(playerVibroInterval);
            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
        } else {
            debuffStep();

            if (player.weapon.hp >= field[pos].hp) {
                damage = field[pos].hp;
                player.weapon.hp -= damage;
                field[pos].hp = 0;
                // debuffStep();
                takeOneStep();
            } else {
                checkMinotaur(pos);
                damage = player.weapon.hp;
                field[pos].hp -= damage;
                player.weapon.hp = 0;
                // debuffStep();
                takeOneStep();
                vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                // drawRefreshField();
            }
        }
    }
    function attackForwardTwo(pos, pos2) {
        if (checkTank(pos)) {
            clearInterval(playerVibroInterval);
            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
        } else {
            debuffStep();

            if (player.weapon.hp >= field[pos].hp) {
                damage = field[pos].hp;
                if (checkTank(pos2)) {
                    clearInterval(playerVibroInterval);
                    playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                } else {
                    if (canAttack(pos2)) {
                        field[pos2].hp -= damage;
                    }
                }
                player.weapon.hp -= damage;
                field[pos].hp = 0;
            } else {
                checkMinotaur(pos);
                vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                damage = player.weapon.hp;
                field[pos].hp -= damage;
                if (checkTank(pos2)) {
                    clearInterval(playerVibroInterval);
                    playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                } else {
                    if (canAttack(pos2)) {
                        field[pos2].hp -= damage;
                        checkMinotaur(pos2);
                    }
                }
                player.weapon.hp = 0;
            }
            if (canAttack(pos2)) {
                if (field[pos2].hp <= 0) {
                    killEnemy(pos2);
                } else {
                    vibroInterval2 = setInterval(drawVibration, 20, pos2, vibro2);
                }
            }
            takeOneStep();
        }
    }
    function attackForwardWall(pos, pos2, pos3) {
        if (checkTank(pos)) {
            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
        } else {
            debuffStep();

            if (player.weapon.hp >= field[pos].hp) {
                damage = field[pos].hp;
                if (canAttack(pos2)) {
                    field[pos2].hp -= damage;
                }
                if (canAttack(pos3)) {
                    field[pos3].hp -= damage;
                }
                // shotgunSnd.play();
                player.weapon.hp -= damage;
                field[pos].hp = 0;
            } else {
                checkMinotaur(pos);
                vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                damage = player.weapon.hp;
                field[pos].hp -= damage;
                if (canAttack(pos2)) {
                    field[pos2].hp -= damage;
                    checkMinotaur(pos2);
                }
                if (canAttack(pos3)) {
                    field[pos3].hp -= damage;
                    checkMinotaur(pos3);
                }
                player.weapon.hp = 0;
            }
            if (canAttack(pos2)) {
                if (field[pos2].hp <= 0) {
                    killEnemy(pos2);
                } else {
                    vibroInterval2 = setInterval(drawVibration, 20, pos2, vibro2);
                }
            }
            if (canAttack(pos3)) {
                if (field[pos3].hp <= 0) {
                    killEnemy(pos3);
                } else {
                    vibroInterval3 = setInterval(drawVibration, 20, pos3, vibro3);
                }
            }
            // debuffStep();
            takeOneStep();
        }
    }
    function attackCross(pos, pos2, pos3, pos4, pos5) {
        let etalon = [pos2, pos3, pos4, pos5];
        let set = new Set([pos, pos2, pos3, pos4, pos5]);
        let arr = [];

        if (etalon.includes(pos)) {
            for (let value of set) {
                arr.push(value);
            }

            pos = arr[0];
            pos2 = arr[1];
            pos3 = arr[2];
            pos4 = arr[3];
            while (arr.includes(undefined)) {
                arr.pop();
            }
            // console.log(arr);
    
            if (checkTank(pos)) {
                clearInterval(playerVibroInterval);
                playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                return;
            } else {
                debuffStep();

                if (player.weapon.hp >= field[pos].hp) {
                    damage = field[pos].hp;
                    if (field[pos].type == 'enemy') {
                        field[pos].hp -= damage;
                    }
                    for (let i = 1; i < arr.length; i++) {
                        if (checkTank(arr[i])) {
                            clearInterval(playerVibroInterval);
                            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                            break;
                        } else {
                            if (canAttack(arr[i])) {
                                field[arr[i]].hp -= damage;
                                checkMinotaur(arr[i]);
                            }
                        }
                    }
                    player.weapon.hp -= damage;
                } else {
                    checkMinotaur(pos);
                    damage = player.weapon.hp;
                    field[pos].hp -= damage;
                    vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                    for (let i = 1; i < arr.length; i++) {
                        if (checkTank(arr[i])) {
                            clearInterval(playerVibroInterval);
                            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                            break;
                        } else {
                            if (canAttack(arr[i])) {
                                field[arr[i]].hp -= damage;
                                checkMinotaur(arr[i]);
                            }
                        }
                    }
                    player.weapon.hp = 0;
                }
                for (let i = 1; i < arr.length; i++) {
                    // if (checkTank(pos)) {
                    //     playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                    // } else {
                        if (canAttack(arr[i])) {
                            if (field[arr[i]].hp <= 0) {
                                killEnemy(arr[i]);
                            } else {
                                launchVibroInterval(i, arr[i]);
                            }
                        }
                    // }
                }
            }
            // debuffStep();
            takeOneStep();
        }
    }
    function attackScythe(pos, pos2) {
        if (checkTank(pos)) {
            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
        } else {
            debuffStep();

            if (player.weapon.hp >= field[pos].hp) {
                damage = field[pos].hp;
                if (checkTank(pos2)) {
                    playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                } else {
                    if (canAttack(pos2)) {
                        field[pos2].hp -= damage;
                        checkMinotaur(pos2);
                    }
                }
                player.weapon.hp -= damage;
                field[pos].hp = 0;
                // debuffStep();
                takeOneStep();
            } else {
                checkMinotaur(pos);
                vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                damage = player.weapon.hp;
                field[pos].hp -= damage;
                if (checkTank(pos2)) {
                    playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                } else {
                    if (canAttack(pos2)) {
                        field[pos2].hp -= damage;
                        checkMinotaur(pos2);
                    }
                    // if (canAttack(pos2)) {
                    //     if (field[pos2].hp <= 0) {
                    //         killEnemy(pos2);
                    //     } else {
                    //         vibroInterval2 = setInterval(drawVibration, 20, pos2, vibro2);
                    //     }
                    // }
                }
                player.weapon.hp = 0;
                // debuffStep();
                takeOneStep();
            }
            // if (!checkTank(pos2)) {
                if (canAttack(pos2) && !checkTank(pos2)) {
                    if (field[pos2].hp <= 0) {
                        killEnemy(pos2);
                    } else {
                        vibroInterval2 = setInterval(drawVibration, 20, pos2, vibro2);
                    }
                }
                // playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
            // }
            
        }
    }
    function attackAroundThree(from, pos) {
        let arr = [];
        // let startWeaponHP = player.weapon.hp;

        switch (from) {
            case 'nw':
                if (pos == 'n') {
                    arr.push(pos);
                    arr.push('w');
                } else if (pos == 'w') {
                    arr.push(pos);
                    arr.push('n');
                }
                break;
            case 'n':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('nw');
                    arr.push('ne');
                } else if (pos == 'nw' || pos == 'ne') {
                    arr.push(pos);
                    arr.push('center');
                }
                break;
            case 'ne':
                if (pos == 'n') {
                    arr.push(pos);
                    arr.push('e');
                } else if (pos == 'e') {
                    arr.push(pos);
                    arr.push('n');
                }
                break;
            case 'w':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('nw');
                    arr.push('sw');
                } else if (pos == 'nw' || pos == 'sw') {
                    arr.push(pos);
                    arr.push('center');
                }
                break;
            case 'center':
                if (pos == 's' || pos == 'n') {
                    arr.push(pos);
                    arr.push('w');
                    arr.push('e');
                } else if (pos == 'e' || pos == 'w') {
                    arr.push(pos);
                    arr.push('s');
                    arr.push('n');
                }
                break;
            case 'e':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('ne');
                    arr.push('se');
                } else if (pos == 'se' || pos == 'ne') {
                    arr.push(pos);
                    arr.push('center');
                }
                break;
            case 'sw':
                if (pos == 's') {
                    arr.push(pos);
                    arr.push('w');
                } else if (pos == 'w') {
                    arr.push(pos);
                    arr.push('s');
                }
                break;
            case 's':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('sw');
                    arr.push('se');
                } else if (pos == 'sw' || pos == 'se') {
                    arr.push(pos);
                    arr.push('center');
                }
                break;
            case 'se':
                if (pos == 'e') {
                    arr.push(pos);
                    arr.push('s');
                } else if (pos == 's') {
                    arr.push(pos);
                    arr.push('e');
                }
                break;
            default:
                break;
        }
        for (let i = 0; i < arr.length; i++) {
            if (field[arr[i]].type != 'enemy' && field[arr[i]].type != 'trap') {
                arr.splice(i, 1);
                i--;
            }
        }

        // pos = arr[0];
        // pos2 = arr[1];
        // pos3 = arr[2];

        console.log(arr);
        

        if (arr.length > 0) {
            if (checkTank(pos)) {
                clearInterval(playerVibroInterval);
                playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                return;
            } else {
                debuffStep();

                if (player.weapon.hp >= field[pos].hp) {
                    damage = field[pos].hp;
                    player.weapon.hp -= damage;
                    field[pos].hp = 0;
                    // debuffStep();
                    takeOneStep();
                } else {
                    checkMinotaur(pos);
                    damage = player.weapon.hp;
                    field[pos].hp -= damage;
                    player.weapon.hp = 0;
                    // debuffStep();
                    takeOneStep();
                    vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                    // drawRefreshField();
                }
                for (let i = 1; i < arr.length; i++) {
                    if (canAttack(arr[i])) {
                        if (checkTank(arr[i])) {
                            clearInterval(drawPlayerVibro);
                            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
                        } else {
                            field[arr[i]].hp -= damage;
                            checkMinotaur(arr[i]);
                            if (field[arr[i]].hp <= 0) {
                                killEnemy(arr[i]);
                            } else {
                                launchVibroInterval(i, arr[i]);
                                // vibroInterval2 = setInterval(drawVibration, 20, arr[i], vibro2);
                            }
                        }
                    }
                }
                // if (canAttack(pos2)) {
                //     field[pos2].hp -= damage;
                //     checkMinotaur(pos2);
                //     if (field[pos2].hp <= 0) {
                //         killEnemy(pos2);
                //     } else {
                //         vibroInterval2 = setInterval(drawVibration, 20, pos2, vibro2);
                //     }
                // }
                // if (canAttack(pos3)) {
                //     field[pos3].hp -= damage;
                //     checkMinotaur(pos3);
                //     if (field[pos3].hp <= 0) {
                //         killEnemy(pos3);
                //     } else {
                //         vibroInterval3 = setInterval(drawVibration, 20, pos3, vibro3);
                //     }
                // }
            }
        }
    }
    function attackDiagonally(from, pos) {
        let map = new Map();
        map.set('nw', ['center']);
        map.set('n', ['w', 'e']);
        map.set('ne', ['center']);
        map.set('w', ['n', 's']);
        map.set('center', ['nw', 'ne', 'sw', 'se']);
        map.set('e', ['n', 's']);
        map.set('sw', ['center']);
        map.set('s', ['w', 'e']);
        map.set('se', ['center']);

        
        if (checkTank(pos)) {
            clearInterval(playerVibroInterval);
            playerVibroInterval = setInterval(drawPlayerVibro, 20, from, playerVibro);
            return;
        } else {
            debuffStep();

            if (map.get(from).includes(pos)) {
                if (player.weapon.hp >= field[pos].hp) {
                    damage = field[pos].hp;
                    player.weapon.hp -= damage;
                    field[pos].hp = 0;
                    takeOneStep();
                } else {
                    checkMinotaur(pos);
                    damage = player.weapon.hp;
                    field[pos].hp -= damage;
                    player.weapon.hp = 0;
                    // debuffStep();
                    takeOneStep();
                    vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                    // drawRefreshField();
                }
            } else {
                chooseAttackEnemyArea(pos, from,'forward');
            }
        }
    }
    function attackAroundFive(from, pos) {
        let arr = [];
        // let startWeaponHP = player.weapon.hp;

        switch (from) {
            case 'nw':
                if (pos == 'n') {
                    arr.push(pos);
                    arr.push('w');
                    arr.push('center');
                } else if (pos == 'w') {
                    arr.push(pos);
                    arr.push('n');
                    arr.push('center');
                }
                break;
            case 'n':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('nw');
                    arr.push('ne');
                    arr.push('w');
                    arr.push('e');
                } else if (pos == 'nw') {
                    arr.push(pos);
                    arr.push('w');
                    arr.push('center');
                } else if (pos == 'ne') {
                    arr.push(pos);
                    arr.push('e');
                    arr.push('center');
                }
                break;
            case 'ne':
                if (pos == 'n') {
                    arr.push(pos);
                    arr.push('e');
                    arr.push('center');
                } else if (pos == 'e') {
                    arr.push(pos);
                    arr.push('n');
                    arr.push('center');
                }
                break;
            case 'w':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('nw');
                    arr.push('n');
                    arr.push('sw');
                    arr.push('s');
                } else if (pos == 'nw') {
                    arr.push(pos);
                    arr.push('n');
                    arr.push('center');
                } else if (pos == 'sw') {
                    arr.push(pos);
                    arr.push('s');
                    arr.push('center');
                }
                break;
            case 'center':
                if (pos == 'n') {
                    arr.push(pos);
                    arr.push('nw');
                    arr.push('w');
                    arr.push('ne');
                    arr.push('e');
                } else if (pos == 'e') {
                    arr.push(pos);
                    arr.push('ne');
                    arr.push('n');
                    arr.push('se');
                    arr.push('s');
                } else if (pos == 's') {
                    arr.push(pos);
                    arr.push('sw');
                    arr.push('w');
                    arr.push('se');
                    arr.push('e');
                } else if (pos == 'w') {
                    arr.push(pos);
                    arr.push('nw');
                    arr.push('n');
                    arr.push('sw');
                    arr.push('s');
                }
                break;
            case 'e':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('ne');
                    arr.push('n');
                    arr.push('se');
                    arr.push('s');
                } else if (pos == 'ne') {
                    arr.push(pos);
                    arr.push('n');
                    arr.push('center');
                } else if (pos == 'se') {
                    arr.push(pos);
                    arr.push('s');
                    arr.push('center');
                }
                break;
            case 'sw':
                if (pos == 's') {
                    arr.push(pos);
                    arr.push('center');
                    arr.push('w');
                } else if (pos == 'w') {
                    arr.push(pos);
                    arr.push('center');
                    arr.push('s');
                }
                break;
            case 's':
                if (pos == 'center') {
                    arr.push(pos);
                    arr.push('sw');
                    arr.push('w');
                    arr.push('se');
                    arr.push('e');
                } else if (pos == 'sw') {
                    arr.push(pos);
                    arr.push('w');
                    arr.push('center');
                } else if (pos == 'se') {
                    arr.push(pos);
                    arr.push('e');
                    arr.push('center');
                }
                break;
            case 'se':
                if (pos == 'e') {
                    arr.push(pos);
                    arr.push('s');
                    arr.push('center');
                } else if (pos == 's') {
                    arr.push(pos);
                    arr.push('e');
                    arr.push('center');
                }
                break;
            default:
                break;
        }
        for (let i = 0; i < arr.length; i++) {
            if (field[arr[i]].type != 'enemy' && field[arr[i]].type != 'trap') {
                arr.splice(i, 1);
                i--;
            }
        }


        // pos = arr[0];
        // pos2 = arr[1];
        // pos3 = arr[2];
        // pos4 = arr[3];
        // pos5 = arr[4];

        console.log(arr);

        debuffStep();
        
        // if (arr.length > 0) {
            if (canAttack(pos)) {
                if (player.weapon.hp >= field[pos].hp) {
                    damage = field[pos].hp;
                    player.weapon.hp -= damage;
                    field[pos].hp = 0;
                    // debuffStep();
                    takeOneStep();
                    console.log(true);
                    useWeaponSpecial(pos);
                } else {
                    checkMinotaur(pos);
                    damage = player.weapon.hp;
                    field[pos].hp -= damage;
                    player.weapon.hp = 0;
                    // debuffStep();
                    takeOneStep();
                    useWeaponSpecial(pos);
                    vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
                }
                // attackForward(pos);
                for (let i = 1; i < arr.length; i++) {
                    if (canAttack(arr[i])) {
                        field[arr[i]].hp -= damage;
                        useWeaponSpecial(arr[i]);
                        checkMinotaur(arr[i]);
                        if (field[arr[i]].hp <= 0) {
                            killEnemy(arr[i]);
                        } else {
                            launchVibroInterval(i, arr[i]);
                            // vibroInterval2 = setInterval(drawVibration, 20, pos2, vibro2);
                        }
                    }
                }
                // if (canAttack(pos2)) {
                //     field[pos2].hp -= damage;
                //     checkMinotaur(pos2);
                //     if (field[pos2].hp <= 0) {
                //         killEnemy(pos2);
                //     } else {
                //         vibroInterval2 = setInterval(drawVibration, 20, pos2, vibro2);
                //     }
                // }
                // if (canAttack(pos3)) {
                //     field[pos3].hp -= damage;
                //     checkMinotaur(pos3);
                //     if (field[pos3].hp <= 0) {
                //         killEnemy(pos3);
                //     } else {
                //         vibroInterval3 = setInterval(drawVibration, 20, pos3, vibro3);
                //     }
                // }
                // if (canAttack(pos4)) {
                //     field[pos4].hp -= damage;
                //     checkMinotaur(pos4);
                //     if (field[pos4].hp <= 0) {
                //         killEnemy(pos4);
                //     } else {
                //         vibroInterval4 = setInterval(drawVibration, 20, pos4, vibro4);
                //     }
                // }
                // if (canAttack(pos5)) {
                //     field[pos5].hp -= damage;
                //     checkMinotaur(pos5);
                //     if (field[pos5].hp <= 0) {
                //         killEnemy(pos5);
                //     } else {
                //         vibroInterval5 = setInterval(drawVibration, 20, pos5, vibro5);
                //     }
                // }
            }
        // }


    }
    function attackForwardAll(from, pos, arr) {
        arr.unshift(pos);

        debuffStep();

        if (canAttack(pos)) {
            if (player.weapon.hp >= field[pos].hp) {
                damage = field[pos].hp;
                player.weapon.hp -= damage;
                field[pos].hp = 0;
                // debuffStep();
                takeOneStep();
            } else {
                checkMinotaur(pos);
                damage = player.weapon.hp;
                field[pos].hp -= damage;
                player.weapon.hp = 0;
                // debuffStep();
                takeOneStep();
                vibroInterval = setInterval(drawVibration, 20, pos, vibro1);
            }
            for (let i = 1; i < arr.length; i++) {
                if (canAttack(arr[i])) {
                    field[arr[i]].hp -= damage;
                    checkMinotaur(arr[i]);
                    if (field[arr[i]].hp <= 0) {
                        killEnemy(arr[i]);
                    } else {
                        launchVibroInterval(i, arr[i]);
                    }
                }
            }
        }

    }


    switch (area) {
        case 'without':
            useEnemySpecial(field[pos]);
            attackWithoutWeapon(pos);
            break;
        case 'forward':
            attackForward(pos);
            useWeaponSpecial(pos);
            break;
        case 'any':
            attackAny(pos);
            useWeaponSpecial(pos);
            break;
        case 'forwardTwo':
            switch (from) {
                case 'nw':
                    if (pos == 'n') {
                        attackForwardTwo(pos, 'ne');
                    } else if (pos == 'w') {
                        attackForwardTwo(pos, 'sw');
                    }
                    break;
                case 'ne':
                    if (pos == 'n') {
                        attackForwardTwo(pos, 'nw');
                    } else if (pos == 'e') {
                        attackForwardTwo(pos, 'se');
                    }
                    break;
                case 'sw':
                    if (pos == 'w') {
                        attackForwardTwo(pos, 'nw');
                    } else if (pos == 's') {
                        attackForwardTwo(pos, 'se');
                    }
                    break;
                case 'se':
                    if (pos == 'e') {
                        attackForwardTwo(pos, 'ne');
                    } else if (pos == 's') {
                        attackForwardTwo(pos, 'sw');
                    }
                    break;

                case 'n':
                    if (pos == 'center') {
                        attackForwardTwo(pos, 's');
                    } else if (pos == 'nw' || pos == 'ne') {
                        chooseAttackEnemyArea(pos, from, 'forward');
                    }
                    break;
                case 'w':
                    if (pos == 'center') {
                        attackForwardTwo(pos, 'e');
                    } else if (pos == 'nw' || pos == 'sw') {
                        chooseAttackEnemyArea(pos, from, 'forward');
                    }
                    break;
                case 'e':
                    if (pos == 'center') {
                        attackForwardTwo(pos, 'w');
                    } else if (pos == 'ne' || pos == 'se') {
                        chooseAttackEnemyArea(pos, from, 'forward');
                    }
                    break;
                case 's':
                    if (pos == 'center') {
                        attackForwardTwo(pos, 'n');
                    } else if (pos == 'sw' || pos == 'se') {
                        chooseAttackEnemyArea(pos, from, 'forward');
                    }
                    break;
                case 'center': 
                    if (pos == 'n' || pos == 's' || pos == 'w' || pos == 'e')
                    chooseAttackEnemyArea(pos, from, 'forward');
                    break;
                default:
                    break;
            }
            useWeaponSpecial(pos);
            break;
        case 'cross':
            switch (from) {
                case 'nw':
                    attackCross(pos, 'w', 'n');
                    break;
                case 'n':
                    attackCross(pos, 'nw', 'center', 'ne');
                    break;
                case 'ne':
                    attackCross(pos, 'n', 'e');
                    break;
                case 'w':
                    attackCross(pos, 'nw', 'center', 'sw');
                    break;
                case 'center':
                    attackCross(pos, 'w', 'n', 's', 'e');
                    break;
                case 'e':
                    attackCross(pos, 'ne', 'se', 'center');
                    break;
                case 'sw':
                    attackCross(pos, 'w', 's');
                    break;
                case 's':
                    attackCross(pos, 'sw', 'center', 'se');
                    break;
                case 'se':
                    attackCross(pos, 's', 'e');
                    break;
                default:
                    break;
            }
            break;
        case 'forwardWall':
            switch (from) {
                case 'nw':
                    if (pos == 'n' || pos == 'w') {
                        attackForwardWall(pos, 'center');
                    }
                    break;
                case 'n':
                    if (pos == 'center') {
                        attackForwardWall(pos, 'w', 'e');
                    } else if (pos == 'nw') {
                        attackForwardWall(pos, 'w');
                    } else if (pos == 'ne') {
                        attackForwardWall(pos, 'e');
                    }
                    break;
                case 'ne':
                    if (pos == 'n' || pos == 'e') {
                        attackForwardWall(pos, 'center');
                    }
                    break;
                case 'w':
                    if (pos == 'center') {
                        attackForwardWall(pos, 'n', 's');
                    } else if (pos == 'nw') {
                        attackForwardWall(pos, 'n');
                    } else if (pos == 'sw') {
                        attackForwardWall(pos, 's');
                    }
                    break;
                case 'center':
                    if (pos == 'n') {
                        attackForwardWall(pos, 'nw', 'ne');
                    } else if (pos == 'w') {
                        attackForwardWall(pos, 'nw', 'sw');
                    } else if (pos == 'e') {
                        attackForwardWall(pos, 'ne', 'se');
                    } else if (pos == 's') {
                        attackForwardWall(pos, 'sw', 'se');
                    }
                    break;
                case 'e':
                    if (pos == 'center') {
                        attackForwardWall(pos, 'n', 's');
                    } else if (pos == 'ne') {
                        attackForwardWall(pos, 'n');
                    } else if (pos == 'se') {
                        attackForwardWall(pos, 's');
                    }
                    break;
                case 'sw':
                    if (pos == 's' || pos == 'w') {
                        attackForwardWall(pos, 'center');
                    }
                    break;
                case 's':
                    if (pos == 'center') {
                        attackForwardWall(pos, 'w', 'e');
                    } else if (pos == 'sw') {
                        attackForwardWall(pos, 'w');
                    } else if (pos == 'se') {
                        attackForwardWall(pos, 'e');
                    }
                    break;
                case 'se':
                    if (pos == 's' || pos == 'e') {
                        attackForwardWall(pos, 'center');
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'scythe':
            switch (from) {
                case 'nw':
                    if (pos == 'w') {
                        attackScythe(pos, 'n');
                    } else if (pos == 'n') {
                        attackForward(pos);
                    }
                    break;
                case 'n':
                    if (pos == 'nw') {
                        attackScythe(pos, 'center');
                    } else if (pos == 'center') {
                        attackScythe(pos, 'ne');
                    } else if (pos == 'ne') {
                        attackForward(pos);
                    }
                    break;
                case 'ne':
                    if (pos == 'n') {
                        attackScythe(pos, 'e');
                    } else if (pos == 'e') {
                        attackForward(pos);
                    }
                    break;
                case 'w':
                    if (pos == 'sw') {
                        attackScythe(pos, 'center');
                    } else if (pos == 'center') {
                        attackScythe(pos, 'nw');
                    } else if (pos == 'nw') {
                        attackForward(pos);
                    }
                    break;
                case 'center':
                    if (pos == 'n') {
                        attackScythe(pos, 'w');
                    } else if (pos == 'w') {
                        attackScythe(pos, 's');
                    } else if (pos == 's') {
                        attackScythe(pos, 'e');
                    } else if (pos == 'e') {
                        attackScythe(pos, 'n');
                    }
                    break;
                case 'e':
                    if (pos == 'ne') {
                        attackScythe(pos, 'center');
                    } else if (pos == 'center') {
                        attackScythe(pos, 'se');
                    } else if (pos == 'se') {
                        attackForward(pos);
                    }
                    break;
                case 'sw':
                    if (pos == 's') {
                        attackScythe(pos, 'w');
                    } else if (pos == 'w') {
                        attackForward(pos);
                    }
                    break;
                case 's':
                    if (pos == 'se') {
                        attackScythe(pos, 'center');
                    } else if (pos == 'center') {
                        attackScythe(pos, 'sw');
                    } else if (pos == 'sw') {
                        attackForward(pos);
                    }
                    break;
                case 'se':
                    if (pos == 'e') {
                        attackScythe(pos, 's');
                    } else if (pos == 's') {
                        attackForward(pos);
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'aroundThree':
            attackAroundThree(from, pos);
            break;
        case 'diagonally':
            attackDiagonally(from, pos);
            break;
        case 'aroundFive':
            attackAroundFive(from, pos);
            // useWeaponSpecial(pos);
            break;
        case 'shield':
            attackShield(pos);
            break;
        case 'forwardAll':
            switch (from) {
                case 'nw':
                    if (pos == 'n') {
                        attackForwardAll(from, pos, ['ne', 'center', 'e']);
                    } else if (pos == 'w') {
                        attackForwardAll(from, pos, ['center', 'sw', 's']);
                    }
                    break;
                case 'n':
                    if (pos == 'center') {
                        attackForwardAll(from, pos, ['w', 'e', 'sw', 's', 'se']);
                    } else if (pos == 'nw') {
                        attackForwardAll(from, pos, ['w']);
                    } else if (pos == 'ne') {
                        attackForwardAll(from, pos, ['e']);
                    }
                    break;
                case 'ne':
                    if (pos == 'n') {
                        attackForwardAll(from, pos, ['center', 'w', 'nw']);
                    } else if (pos == 'e') {
                        attackForwardAll(from, pos, ['center', 's', 'se']);
                    }
                    break;
                case 'w':
                    if (pos == 'center') {
                        attackForwardAll(from, pos, ['n', 's', 'ne', 'e', 'se']);
                    } else if (pos == 'nw') {
                        attackForwardAll(from, pos, ['n']);
                    } else if (pos == 'sw') {
                        attackForwardAll(from, pos, ['s']);
                    }
                    break;
                case 'center':
                    if (pos == 'n') {
                        attackForwardAll(from, pos, ['nw', 'ne']);
                    } else if (pos == 'w') {
                        attackForwardAll(from, pos, ['nw', 'sw']);
                    } else if (pos == 'e') {
                        attackForwardAll(from, pos, ['ne', 'se']);
                    } else if (pos == 's') {
                        attackForwardAll(from, pos, ['sw', 'se']);
                    }
                    break;
                case 'e':
                    if (pos == 'center') {
                        attackForwardAll(from, pos, ['n', 's', 'nw', 'w', 'sw']);
                    } else if (pos == 'ne') {
                        attackForwardAll(from, pos, ['n']);
                    } else if (pos == 'se') {
                        attackForwardAll(from, pos, ['s']);
                    }
                    break;
                case 'sw':
                    if (pos == 's') {
                        attackForwardAll(from, pos, ['center', 'e', 'se']);
                    } else if (pos == 'w') {
                        attackForwardAll(from, pos, ['center', 'n', 'nw']);
                    }
                    break;
                case 's':
                    if (pos == 'center') {
                        attackForwardAll(from, pos, ['w', 'e', 'nw', 'n', 'ne']);
                    } else if (pos == 'sw') {
                        attackForwardAll(from, pos, ['w']);
                    } else if (pos == 'se') {
                        attackForwardAll(from, pos, ['e']);
                    }
                    break;
                case 'se':
                    if (pos == 's') {
                        attackForwardAll(from, pos, ['center', 'w', 'sw']);
                    } else if (pos == 'e') {
                        attackForwardAll(from, pos, ['center', 'n', 'ne']);
                    }
                    break;
                default:
                    break;
            }
            // attackforwardAll(from, pos);
            break;
        default:
            break;
    }
}
function killEnemy(pos) {
    let gold;
    if (field[pos].name == 'hydra3') {
        gold = field[pos].gold;
        field[pos] = createNewCard('hydra2');
        field[pos].gold += gold;
    } else if (field[pos].name == 'hydra2') {
        gold = field[pos].gold;
        field[pos] = createNewCard('hydra1');
        field[pos].gold += gold;
    } else {
        gold = field[pos].gold;
        field[pos] = createNewCard('gold');
        field[pos].hp = gold;
    }
    if (field[pos].type == 'gold') {
        if (field[pos].hp > 4) {
            field[pos].skin = diamondImg;
        } else {
            field[pos].skin = goldImg;
        }
    }
}
function pressWeaponCard(pos) {
    debuffStep();
    if (player.weapon == null) {
        player.weapon = givePlayerWeapon(field[pos].name, field[pos].hp);
        console.log(`Вы подобрали оружие: ${field[pos].name}`);
    } else if (player.weapon != null) {
        player.weapon2 = givePlayerWeapon(field[pos].name, field[pos].hp);
        console.log(`Вы подобрали второе оружие: ${field[pos].name}`);
    }
    // player.weapon = null;
    field[pos] = player;
    takeOneStep();
}
function pressHealCard(pos) {
    debuffStep();
    player.debuff.poison = false;
    player.hp += field[pos].hp;
    if (player.hp > playerDefault.hp) {
        player.hp = playerDefault.hp;
    }
    if (field[pos].special == 'healing') {
        player.buff.healing = 4;
    }
    // player.debuff = debuffObj();
    console.log(`Вы восстановили ${field[pos].hp} здоровья`);
    field[pos] = player;
    // field[from] = null;
    // player.stats.difficultyUp();
    // field[from] = createNewCard('random');
    // drawRefreshField();
    takeOneStep();
}
function takeGold(pos) {
    debuffStep();
    player.gold += field[pos].hp;
    field[pos] = player;
    // field[from] = null;
    takeOneStep();
}
function pressChestCard(pos) {
    function getRandomInner(chestType) {
        let types = [];
        if (chestType == 'badChest') {
            types = ['enemy', 'trap'];
        } else if (chestType == 'goodChest') {
            types = ['weapon', 'heal', 'gold'];
        }
        let num = Math.floor(Math.random() * types.length);
        let newCard = createNewCard(types[num]);
        return newCard;
    }
    debuffStep();
    
    field[pos] = getRandomInner(field[pos].name);
    field[pos].afterChest = true;
    
    takeOneStep();
}
function pressTrapCard(pos, from) {
    debuffStep();
    if (field[pos].name == 'minefield') {
        // console.log(field[pos].debuff.dangerous);
        let random = Math.floor(Math.random() * 20);
        switch (field[pos].debuff.dangerous) {
            case 'red':
                if (random >= 9 && random <= 19) {
                    if (player.hp > field[pos].hp) {
                        player.hp -= field[pos].hp;
                        field[pos].hp = 0;
                        field[pos] = player;
                        // field[from] = null;
                    } else {
                        field[pos].hp -= player.hp;
                        player.hp = 0;
                    }
                } else {
                    field[pos] = player;
                    // field[from] = null;
                }
                break;
            case 'yellow':
                if (random >= 14 && random <= 19) {
                    if (player.hp > field[pos].hp) {
                        player.hp -= field[pos].hp;
                        field[pos].hp = 0;
                        field[pos] = player;
                        // field[from] = null;
                    } else {
                        field[pos].hp -= player.hp;
                        player.hp = 0;
                    }
                } else {
                    field[pos] = player;
                    // field[from] = null;
                }
                break;
            case 'green':
                field[pos] = player;
                // field[from] = null;
                
                break;
            default:
                break;
        }
    } else if (field[pos].name == 'tornado') {
        let newField = [];
        player.afterTornado = true;
        field[from] = createNewCard('random');
        field[pos] = player;
        for (let pos in field) {
            newField.push(field[pos]);
            newField.sort(function() {
                return Math.random() - 0.5;
            });
        }
        let ind = 0;
        for (let pos in field) {
            field[pos] = newField[ind];
            ind++;
        }
    } else if (field[pos].name == 'magicLamp') {
        let positions = ['nw', 'n', 'ne', 'w', 'center', 'e', 'sw', 's', 'se'];
        field[pos] = player;
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * 9);
            if (field[positions[random]].type == 'player') {
                i--;
            } else {
                let newCard = createNewCard('random');
                field[positions[random]] = newCard;
            }
        }
    } else {
        if (player.hp > field[pos].hp) {
            useEnemySpecial(field[pos]);
            player.hp -= field[pos].hp;
            field[pos].hp = 0;
            field[pos] = player;
            // field[from] = null;
        } else {
            field[pos].hp -= player.hp;
            player.hp = 0;
        }
    }
    takeOneStep();
}
function setMine(pos) {
    console.log(field[pos]);
    if (field[pos].type != 'enemy' && field[pos].type != 'player') {
        debuffStep();
        mined[pos] = player.weapon.hp;
        player.weapon.hp = 0;
        player.afterMining = true;
        takeOneStep();
    }
}
function checkMine() {
    for (let pos in field) {
        if (mined[pos] && field[pos].type == 'enemy') {
            field[pos].hp -= mined[pos];
            if (field[pos].hp <= 0) {
                killEnemy(pos);
            }
            mined[pos] = false;
        }
    }
}
function cardShift(posFrom, pos) {
    if (player.weapon && player.weapon.name == 'mine') {
        checkPlayerWeapon();
        drawRefreshField();
    }
    function canMove(pos) {
        if (field[pos].afterChest != true && player.afterTornado == false && player.afterMining == false) {
            if (field[pos].type != 'enemy' || player.weapon == null) {
                return true;
            } else {
                return false;
            }
        } else {
            // console.log(player.afterTornado);
            return false;
        }
    }

    if (canMove(pos)) {
        switch (posFrom) {
            case 'nw':
                if (pos == 'n') {
                    field[posFrom] = field['w'];
                    field['w'] = field['sw'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'right');
                    window.moveLeftInterval = setInterval(drawMoveCardTop, 10, 'nw', 'w');
                    window.moveLeftInterval2 = setInterval(drawMoveCardTop, 10, 'w', 'sw');
                    field['sw'] = createNewCard('random');
                } else if (pos == 'w') {
                    field[posFrom] = field['n'];
                    field['n'] = field['ne'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'bottom');
                    window.moveLeftInterval = setInterval(drawMoveCardLeft, 10, 'nw', 'n');
                    window.moveLeftInterval2 = setInterval(drawMoveCardLeft, 10, 'n', 'ne');
                    field['ne'] = createNewCard('random');
                }
                break;
            case 'n':
                if (pos == 'ne' || pos == 'center') {
                    field[posFrom] = field['nw'];
                    pos == 'ne' ? window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'right') : 
                        window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'bottom');
                    window.moveLeftInterval = setInterval(drawMoveCardRight, 10, 'n', 'nw');
                    field['nw'] = createNewCard('random');
                } else if (pos == 'nw') {
                    field[posFrom] = field['ne'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'left');
                    window.moveLeftInterval = setInterval(drawMoveCardLeft, 10, 'n', 'ne');
                    field['ne'] = createNewCard('random');
                }
                break;
            case 'ne':
                if (pos == 'n') {
                    field[posFrom] = field['e'];
                    field['e'] = field['se'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'left');
                    window.moveLeftInterval = setInterval(drawMoveCardTop, 10, 'ne', 'e');
                    window.moveLeftInterval2 = setInterval(drawMoveCardTop, 10, 'e', 'se');
                    field['se'] = createNewCard('random');
                } else if (pos == 'e') {
                    field[posFrom] = field['n'];
                    field['n'] = field['nw'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'bottom');
                    window.moveLeftInterval = setInterval(drawMoveCardRight, 10, 'ne', 'n');
                    window.moveLeftInterval2 = setInterval(drawMoveCardRight, 10, 'n', 'nw');
                    field['nw'] = createNewCard('random');
                }
                break;
            case 'w':
                if (pos == 'nw' || pos == 'center') {
                    field[posFrom] = field['sw'];
                    pos == 'nw' ? window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'top') : 
                        window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'right');
                    window.moveLeftInterval = setInterval(drawMoveCardTop, 10, 'w', 'sw');
                    field['sw'] = createNewCard('random');
                } else if (pos == 'sw') {
                    field[posFrom] = field['nw'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'bottom');
                    window.moveLeftInterval = setInterval(drawMoveCardBottom, 10, 'w', 'nw');
                    field['nw'] = createNewCard('random');
                }
                break;
            case 'center':
                if (pos == 'n') {
                    field[posFrom] = field['s'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'top');
                    window.moveLeftInterval = setInterval(drawMoveCardTop, 10, 'center', 's');
                    field['s'] = createNewCard('random');
                } else if (pos == 's') {
                    field[posFrom] = field['n'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'bottom');
                    window.moveLeftInterval = setInterval(drawMoveCardBottom, 10, 'center', 'n');
                    field['n'] = createNewCard('random');
                } else if (pos == 'w') {
                    field[posFrom] = field['e'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'left');
                    window.moveLeftInterval = setInterval(drawMoveCardLeft, 10, 'center', 'e');
                    field['e'] = createNewCard('random');
                } else if (pos == 'e') {
                    field[posFrom] = field['w'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'right');
                    window.moveLeftInterval = setInterval(drawMoveCardRight, 10, 'center', 'w');
                    field['w'] = createNewCard('random');
                }
                break;
            case 'e':
                if (pos == 'center' || pos == 'se') {
                    field[posFrom] = field['ne'];
                    pos == 'center' ? window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'left') : 
                        window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'bottom');
                    window.moveLeftInterval = setInterval(drawMoveCardBottom, 10, 'e', 'ne');
                    field['ne'] = createNewCard('random');
                } else if (pos == 'ne') {
                    field[posFrom] = field['se'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'top');
                    window.moveLeftInterval = setInterval(drawMoveCardTop, 10, 'e', 'se');
                    field['se'] = createNewCard('random');
                }
                break;
            case 'sw':
                if (pos == 'w') {
                    field[posFrom] = field['s'];
                    field['s'] = field['se'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'top');
                    window.moveLeftInterval = setInterval(drawMoveCardLeft, 10, 'sw', 's');
                    window.moveLeftInterval2 = setInterval(drawMoveCardLeft, 10, 's', 'se');
                    field['se'] = createNewCard('random');
                } else if (pos == 's') {
                    field[posFrom] = field['w'];
                    field['w'] = field['nw'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'right');
                    window.moveLeftInterval = setInterval(drawMoveCardBottom, 10, 'sw', 'w');
                    window.moveLeftInterval2 = setInterval(drawMoveCardBottom, 10, 'w', 'nw');
                    field['nw'] = createNewCard('random');
                }
                break;
            case 's':
                if (pos == 'center' || pos == 'sw') {
                    field[posFrom] = field['se'];
                    pos == 'center' ? window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'top') : 
                        window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'left');
                    window.moveLeftInterval = setInterval(drawMoveCardLeft, 10, 's', 'se');
                    field['se'] = createNewCard('random');
                } else if (pos == 'se') {
                    field[posFrom] = field['sw'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'right');
                    window.moveLeftInterval = setInterval(drawMoveCardRight, 10, 's', 'sw');
                    field['sw'] = createNewCard('random');
                }
                break;
            case 'se':
                if (pos == 'e') {
                    field[posFrom] = field['s'];
                    field['s'] = field['sw'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'top');
                    window.moveLeftInterval = setInterval(drawMoveCardRight, 10, 'se', 's');
                    window.moveLeftInterval2 = setInterval(drawMoveCardRight, 10, 's', 'sw');
                    field['sw'] = createNewCard('random');
                } else if (pos == 's') {
                    field[posFrom] = field['e'];
                    field['e'] = field['ne'];
                    window.movePlayerInterval = setInterval(drawPlayerMove, 10, pos, posFrom, 'left');
                    window.moveLeftInterval = setInterval(drawMoveCardBottom, 10, 'se', 'e');
                    window.moveLeftInterval2 = setInterval(drawMoveCardBottom, 10, 'e', 'ne');
                    field['ne'] = createNewCard('random');
                }
                break;
        
            default:
                break;
                
            }
        checkPlayerWeapon();
    } else {
        player.afterTornado = false;
        player.afterMining = false;
        drawRefreshField();
    }
    if (field[pos].type == 'enemy') {
        if (field[pos].hp <= 0) {
            killEnemy(pos);
        }
        checkPlayerWeapon();
        drawRefreshField();
    }
    checkMine();
}
function moveFromPos(pos, posFrom, arr) {
    if (player.weapon != null && player.weapon.name =='mine') {
        setMine(pos);
        // drawRefreshField();
    } else {
        if (arr.includes(pos)) {
            switch (field[pos].type) {
                case 'weapon':
                    pressWeaponCard(pos);
                    break;
                case 'enemy':
                    chooseAttackEnemyArea(pos, posFrom, checkPlayerWeapon());
                    break;
                case 'heal':
                    pressHealCard(pos);
                    break;
                case 'gold':
                    takeGold(pos);
                    break;
                case 'chest':
                    pressChestCard(pos);
                    break;
                case 'trap':
                    pressTrapCard(pos, posFrom);
                    break;
                default:
                    alert('Ошибка в определении типа нажатой карточки');
                    console.log(field[pos].type);
                    break;
            }
        } else if (!arr.includes(pos) && field[pos].type == 'enemy' && player.weapon != null) {
            if (player.weapon.area != 'forward') {
                chooseAttackEnemyArea(pos, posFrom, player.weapon.area);
            }
        }
    }
}
function movePlayer(e) {
    clearAllIntervals();
    drawRefreshField();
    let posFrom,
        target,
        positions;
    for (let pos in field) {
        if (field[pos] != null && field[pos].type == 'player') {
            posFrom = pos;
            target = checkClickPosition(e.offsetX, e.offsetY);
            switch (pos) {
                case 'nw':
                    positions = ['n', 'w'];
                    posFrom = 'nw';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 'n':
                    positions = ['nw', 'ne', 'center'];
                    posFrom = 'n';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 'ne':
                    positions = ['n', 'e'];
                    posFrom = 'ne';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 'w':
                    positions = ['nw', 'sw', 'center'];
                    posFrom = 'w';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 'center':
                    positions = ['n', 's', 'w', 'e'];
                    posFrom = 'center';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 'e':
                    positions = ['ne', 'se', 'center'];
                    posFrom = 'e';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 'sw':
                    positions = ['s', 'w'];
                    posFrom = 'sw';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 's':
                    positions = ['sw', 'se', 'center'];
                    posFrom = 's';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                case 'se':
                    positions = ['s', 'e'];
                    posFrom = 'se';
                    moveFromPos(target, posFrom, positions);
                    cardShift(posFrom, target);
                    break;
                default:
                    alert('Где-то жирная ошибка. Позиция игрока определена вне поля');
                    console.log(pos);
                    break;
            }
        } else {
            continue;
        }
    }
    // takeOneStep();
}
window.addEventListener('load', startGame);
window.addEventListener('load', drawRefreshField);
//МЕХАНИКА ИГРЫ КОНЕЦ

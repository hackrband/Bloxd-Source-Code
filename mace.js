onPlayerDamagingOtherPlayer = (damagedId, pid, d, w)=>{
  if(w==="Artisan Axe"){api.applyHealthChange(pid, -500)
api.applyEffect(pid,"Slowness",500,{inbuiltLevel:2})};
}
onPlayerJump=(pid)=>{let item=api.getHeldItem(pid)
    if(item && item.name==="Artisan Axe")
api.setVelocity(pid,0,19,0)}

function onPlayerJoin(myId) {api.editItemCraftingRecipes(myId,
    "Artisan Axe",
    [{
        requires: [
            { items: ["Moonstone"], amt: 10 },
            { items: ["Draugr Knight Spawner Block"], amt: 1 }
        ],
        produces: 1,
        station: "Workbench"
    }]
);}

{api.editItemCraftingRecipes(myId,
    "Apple",
    [{
        requires: [
            { items: ["Gold Bar"], amt: 8 },
            { items: ["Apple"], amt: 1 }
        ],
        produces: 1,
        station: "Workbench"
    }]
);}

onPlayerFinishChargingItem=(id)=>{
let item=api.getHeldItem(id)
    if(item && item.name==="Apple"){

api.applyEffect(id,"Health Regen",10000,{inbuiltLevel:2})
api.applyEffect(id,"Speed",50000,{inbuiltLevel:2})
api.applyEffect(id,"Damage Reduction",50000,{inbuiltLevel:2})
api.applyEffect(id,"Damage",30000,{inbuiltLevel:2})
api.setShieldAmount(id,40)
const oldHealth = api.getHealth(id)
if(oldHealth<130){
api.setHealth(id,oldHealth+30,undefined,true)}}}



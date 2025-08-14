// Damage other players and add effects if holding the Artisan Axe
onPlayerDamagingOtherPlayer = (attacker, damaged, damage, withItem) => {
    if (withItem === "Artisan Axe") {
        api.applyHealthChange(damaged, -500);
        api.applyEffect(damaged, "Slowness", 500, { inbuiltLevel: 2 });
    }
}

// Launch player into the air if they jump with the Artisan Axe
onPlayerJump = (playerId) => {
    let item = api.getHeldItem(playerId);
    if (item && item.name === "Artisan Axe") {
        api.setVelocity(playerId, 0, 19, 0);
    }
}

// Add crafting recipe for Artisan Axe when player joins
onPlayerJoin = (playerId) => {
    api.editItemCraftingRecipes(playerId,
        "Artisan Axe",
        [{
            requires: [
                { items: ["Moonstone"], amt: 10 },
                { items: ["Draugr Knight Spawner Block"], amt: 1 }
            ],
            produces: 1,
            station: "Workbench"
        }]
    );
}

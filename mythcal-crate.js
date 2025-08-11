const requiredBossKeys = 20;
let bossKeyCount = 0;
let keySlots = [];

// Count Boss Keys in inventory
for (let i = 0; i < 36; i++) {
  const item = api.getItemSlot(myId, i);
  if (
    item &&
    item.name === "Red Quick Paintball Explosive Item" &&
    item.attributes?.customDisplayName === "Boss Key"
  ) {
    const amount = item.amount || 1;
    bossKeyCount += amount;
    keySlots.push({ slot: i, amount });
    if (bossKeyCount >= requiredBossKeys) break;
  }
}

if (bossKeyCount >= requiredBossKeys) {
  // Remove the keys
  let keysToRemove = requiredBossKeys;
  for (const entry of keySlots) {
    const toRemove = Math.min(entry.amount, keysToRemove);
    const remaining = entry.amount - toRemove;
    if (remaining > 0) {
      api.setItemSlot(myId, entry.slot, "Red Quick Paintball Explosive Item", remaining, {
        customDisplayName: "Boss Key",
        customDescription: "Earned from defeating bosses"
      });
    } else {
      api.setItemSlot(myId, entry.slot, "Air");
    }
    keysToRemove -= toRemove;
    if (keysToRemove <= 0) break;
  }

  // Determine reward
  const roll = Math.floor(Math.random() * 4);
  let rewardName = "";

  if (roll === 0) {
    rewardName = "Mythical Dagger";
    api.giveItem(myId, "Iron Sword", 1, {
      customAttributes: {
        enchantments: {
          "Damage": 6,
          "Attack Speed": 6
        },
        enchantmentTier: "Tier 4"
      },
      customDisplayName: rewardName
    });
  } else if (roll === 1) {
    rewardName = "Gold Knight Chestplate";
    api.giveItem(myId, "Gold Chestplate", 1, {
      customAttributes: {
        enchantments: {
          "Protection": 6,
          "Health Regen": 6
        },
        enchantmentTier: "Tier 5"
      },
      customDisplayName: rewardName
    });
  } else if (roll === 2) {
    rewardName = "Balanced Diamond Sword";
    api.giveItem(myId, "Diamond Sword", 1, {
      customAttributes: {
        enchantments: {
          "Damage": 3,
          "Horizontal Knockback": 4,
          "Vertical Knockback": 4
        },
        enchantmentTier: "Tier 3"
      },
      customDisplayName: rewardName
    });
  } else {
    rewardName = "Ardoni Diamond Armour";
    api.giveItem(myId, "Diamond Chestplate", 1, {
      customAttributes: {
        enchantments: {
          "Protection": 5,
          "Health Regen": 1
        },
        enchantmentTier: "Tier 5"
      },
      customDisplayName: rewardName
    });
  }

  // Private feedback
  api.sendMessage(myId, "You opened a Mythical Crate!", { color: "gold" });

  // Public broadcast with actual reward name
  api.broadcastMessage(
    api.getEntityName(myId) + " has opened a Mythical Crate and got " + rewardName + "!",
    { color: "Yellow" }
  );

} else {
  api.sendMessage(
    myId,
    `You need ${requiredBossKeys} Boss Keys to open a Mythical Crate.`,
    { color: "red" }
  );
  api.sendMessage(myId, "Gain Boss Keys by defeating bosses!", { color: "cyan" });
}

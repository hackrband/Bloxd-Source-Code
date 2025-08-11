const buyItem = "Yellow Paintball";
const buyAmount = 1;
const customBuyItemName = "Admin Pass";
const priceItem = "Yellow Paintball";
const priceAmount = 1;

if (
    api.getInventoryItemAmount(myId, priceItem) >= priceAmount
) {
    api.removeItemName(myId, priceItem, priceAmount);
    api.giveItem(myId, buyItem, buyAmount, { customDisplayName: customBuyItemName });
    // Only teleport if purchase was successful
    api.setPosition(myId, 1529.00, 2935.00, -473);
    api.sendMessage(myId, "Successfully entered the Admin House!", { color: "Gold" });
} else {
    api.sendMessage(myId, "You're not authorized to enter!", { color: "cyan" });
}
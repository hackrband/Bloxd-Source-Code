api.setTargetedPlayerSettingForEveryone(myId, "nameTagInfo", {
    content: [{str:api.getEntityName(myId),style:{color:"white"}}],
    subtitle: [{str:"Owner",style:{color:"Red"}}],
 backgroundColor: "#131629",
}, true)

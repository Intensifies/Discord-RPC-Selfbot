// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "spotify", 
    // dnd/online/idle
    "status": "dnd",

    "game": {
        "applicationID": "1103326187348050024",

        "name": "Lunar Client", // title
        "details": "Minecraft", // first row below title
        "state": "Version 1.20", // row below first row

        "largeImageKey": "lunar", // Large Image
        "largeImageText": "Lunar Client", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "", // Small Image
        "smallImageText": "",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "1103326187348050024",
        "url": "https://www.youtube.com/watch?v=0qYpKjmdOX8", // twitch channel link

        "details": "Cypher Sings Cupid", // title
        "state": "w/ Fifty Fifty", // first row below title (playing ...)

        "largeImageKey": "cypher", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "This goes out to Cypher's dead wife", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "Spotify", // for exemple listening to {name} instead of listening to spotify
        "details": "Life of a Developer", // title
        "state": "Tense", // row below title

        "largeImageKey": "spotify:ab67706c0000bebb8d0ce13d55f634e290f744ba", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "Developing Life", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",
        
        "startTimestamp": "",
        "endTimestamp": "",
    }
}

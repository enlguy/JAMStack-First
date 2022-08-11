const vibes = [
    "...this will be a great day",
    "...you're doing great",
    "...inner peace"
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

document.querySelector(".vibe").append(vibe)
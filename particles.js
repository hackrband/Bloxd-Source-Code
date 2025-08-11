let [x, y, z] = thisPos
y += 1
api.playParticleEffect({
    dir1: [-1, -1, -1],
    dir2: [1, 1, 1],
    pos1: [x, y, z],
    pos2: [x + 1, y + 1, z - 7],
    texture: "square_particle",
    minLifeTime: 999999,
    maxLifeTime: 999999,
    minEmitPower: 2,
    maxEmitPower: 2,
    minSize: 0.45,
    maxSize: 0.55,
    manualEmitCount: 200,
    gravity: [0, -10, 0],
    colorGradients: [
        {
            timeFraction: 0,
            minColor: [120,51,174, 0.40],
            maxColor: [54,27,111, 0.60],
        },
    ],
    velocityGradients: [
        {
            timeFraction: 0,
            factor: 0,
            factor2: 0,
        },
    ],
    blendMode: 1,
})
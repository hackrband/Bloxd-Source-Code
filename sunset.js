// ===== SKY ANIMATION =====
let skySpeed = 100000;
let intervals = [
  15000, 15000, 15000, 15000, 15000,
  15000, 15000, 15000, 15000, 15000,
  skySpeed / 10, skySpeed / 10, skySpeed / 10, skySpeed / 10, skySpeed / 10,
  skySpeed / 10, skySpeed / 10, skySpeed / 10, skySpeed / 10, skySpeed / 10,
  15000, 15000, 15000, 15000, 15000
];

let inclinationList = Array.from({length:25}, (v,i) =>
  i<5 ? -0.6+i*0.025 :
  i<10 ? -0.5+(i-5)*0.05 :
  i<12 ? -0.25+(i-10)*0.05 :
  i<15 ? -0.05+(i-12)*0.05 :
  i<20 ? 0.1+(i-15)*0.05 :
  0.35+(i-20)*0.05
).concat(0.5);

let skyTime = 0, skyIndex = 0;

tick = (dt) => {
  skyTime += dt;
  while(skyTime >= intervals[skyIndex]) {
    skyTime -= intervals[skyIndex];
    if(++skyIndex >= intervals.length-1) {
      skyIndex = 0;
      skyTime = 0;
    }
  }

  let t = skyTime/intervals[skyIndex];
  let s = inclinationList[skyIndex];
  let e = inclinationList[skyIndex+1];
  let i = s + (e-s)*t;

  api.getPlayerIds().forEach(id => {
    api.setClientOption(id, "skyBlock", {
      type: "earth",
      inclination: i,
      turbidity: 1,
      luminance: 0.75,
      azimuth: 0,
      infiniteDistance: 3,
      vertexTint: [255,255,255]
    });
  });
};
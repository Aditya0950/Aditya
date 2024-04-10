Shery.imageEffect("#Back", {
    style: 5,
    config:
        { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.0892274211099022 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0.011360151085731766 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 1 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 2 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
})

let see = document.querySelector("#See")
let h2s = document.querySelectorAll(".Left-Items h2");
let nav = document.querySelector("nav");
let navA = document.querySelectorAll("nav a");

see.addEventListener("click", function () {
    h2s.forEach(function (h2) {
        h2.style.top = "-110%";
        see.addEventListener("click", function () {
            h2.style.top = "-210%";
            see.addEventListener("click", function () {
                h2.style.top = "-320%";
            })
        })
    })
})

nav.addEventListener("mouseover", function () {
    navA.forEach(function (a) {
        a.style.top = "-100%";
    })
})

nav.addEventListener("mouseleave", function () {
    navA.forEach(function (a) {
        a.style.top = "0%";
    })
})

let crsr = document.querySelector("#Cursor");
let container = document.querySelector("#Container");

container.addEventListener("mousemove", function (dets) {
    crsr.style.top = dets.y + "px";
    crsr.style.left = dets.x + "px";
})

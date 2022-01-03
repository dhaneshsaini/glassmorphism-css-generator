let cssOut = document.getElementById('cssOut');
let inp = document.querySelectorAll('input');
let card = document.querySelector('.card');
let cs = card.style;

const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        , (m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16));

function change() {
    cs.background = `rgba(${hexToRgb(inp[0].value)},${inp[2].value})`;
    cs.backdropFilter = `blur(${inp[1].value}px)`;
    cs.border = `1px solid rgba(${hexToRgb(inp[0].value)},${inp[3].value})`;


    cssOut.innerText = `
/* https://frontendweb.site/ */

background: rgba(${hexToRgb(inp[0].value)},${inp[2].value});
border-radius: 10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${inp[1].value}px);
-webkit-backdrop-filter: blur(${inp[1].value}px);
border: 1px solid rgba(${hexToRgb(inp[0].value)},${inp[3].value});
`;
}
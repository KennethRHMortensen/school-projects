
const $ = function (foo) {
    return document.getElementById(foo);
};


let init = function(){
    let xmlns = 'http://www.w3.org/2000/svg';
    let svg = document.createElementNS(xmlns, 'svg');
    svg.setAttributeNS(null, 'width', '180');
    svg.setAttributeNS(null, 'height', '120');
    svg.setAttributeNS(null, 'viewbox', '0 0 100 100');
    svg.setAttributeNS(null, 'id', 'svg0');
    
    /* upper rectangle */
    let upr = document.createElementNS(xmlns, 'rect');
    upr.setAttributeNS(null, 'x', '0');
    upr.setAttributeNS(null, 'width', '180');
    upr.setAttributeNS(null, 'y', '0');
    upr.setAttributeNS(null, 'height', '60');
    upr.setAttributeNS(null, 'fill', '#fff');
    svg.appendChild(upr);


    /* lower rectangle */
    let lowr = document.createElementNS(xmlns, 'rect');
    lowr.setAttributeNS(null, 'x', '0');
    lowr.setAttributeNS(null, 'width', '180');
    lowr.setAttributeNS(null, 'y', '60');
    lowr.setAttributeNS(null, 'height', '60');
    lowr.setAttributeNS(null, 'fill', '#D00C33');
    svg.appendChild(lowr);

    /* upper half circle (Made as a complete circle) */
    let uprcircle = document.createElementNS(xmlns, 'circle');
    uprcircle.setAttributeNS(null, 'cx', '70');
    uprcircle.setAttributeNS(null, 'cy', '60');
    uprcircle.setAttributeNS(null, 'r', '40');
    uprcircle.setAttributeNS(null, 'fill', '#D00C33');
    svg.appendChild(uprcircle);
    
    /* lower half circle (Made as a path on top of upper circle) */
    let lowrcircle = document.createElementNS(xmlns, 'path');
    lowrcircle.setAttributeNS(null, 'd', 'M30, 60 a1,1 0 0,0 80,0');
    lowrcircle.setAttributeNS(null, 'fill', '#fff');
    svg.appendChild(lowrcircle);


    /* append all to svg */
    $('svg0').appendChild(svg)
    $('svg0').style.lineHeight="0";
}

window.addEventListener('load', init);
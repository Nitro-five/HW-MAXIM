const colorInputEl = document.getElementById('input-color');
const shapeSelectorEl = document.getElementById('selector');
const shapeEl = document.getElementById('shape');
const viewEl = document.getElementById('view');

colorInputEl.addEventListener('change', onColorChange);
shapeSelectorEl.addEventListener('change', onShapeChange);
viewEl.addEventListener('click', onMouseClick);

function onShapeChange() {
    setShape(shapeSelectorEl.value);
}

function onColorChange() {
    setColor(colorInputEl.value);
}

function onMouseClick(e) {
    const x = e.x - viewEl.offsetLeft - shapeEl.offsetWidth / 2;
    const y = e.y - viewEl.offsetTop - shapeEl.offsetHeight / 2;
    setPosition(x, y);
}

function setShape(shape) {
    shapeEl.className = `shape ${shape}`;
}

function setColor(color) {
    shapeEl.style.backgroundColor = color;
}

function setPosition(left, top) {
    shapeEl.style.top = `${top}px`;
    shapeEl.style.left = `${left}px`;
}
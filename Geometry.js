function result(x, y) {

    if (isNaN(x) === true) {
        alert('Please Press Valid Number');
        return;
    }
    else if (x < 0) {
        alert('Please Press Positive Number');
        return;
    }
    else {
        var newlist = document.createElement("li");
        var node = document.createTextNode(y + " " + x.toFixed(2));
        newlist.appendChild(node);
        document.getElementById("list-item").appendChild(newlist);
    }
}
function triangle() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    const area = 0.5 * base * height;
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    const geo = "Triangle"
    result(area, geo);
}
function rectangle() {
    const width = parseFloat(document.getElementById("width").value);
    const length = parseFloat(document.getElementById("length").value);
    const area = width * length;
    document.getElementById("width").value = "";
    document.getElementById("length").value = "";
    const geo = "Rectangle";
    result(area, geo);
}
function parallelogram() {
    const base = parseFloat(document.getElementById("bottom").value);
    const height = parseFloat(document.getElementById("high").value);
    const area = 0.5 * base * height;
    document.getElementById("bottom").value = "";
    document.getElementById("high").value = "";
    const geo = "Parallelogram";
    result(area, geo);
}
function rhombus() {
    const d1 = parseFloat(document.getElementById("diagonal-one").value);
    const d2 = parseFloat(document.getElementById("diagonal-two").value);
    const area = 0.5 * d1 * d2;
    document.getElementById("diagonal-one").value = "";
    document.getElementById("diagonal-two").value = "";
    const geo = "Rhombus";
    result(area, geo);
}
function pentagon() {
    const perimeter = parseFloat(document.getElementById("perimeter").value);
    const apothem = parseFloat(document.getElementById("apothem").value);
    const area = 0.5 * perimeter * apothem;
    document.getElementById("perimeter").value = "";
    document.getElementById("apothem").value = "";
    const geo = "Pentagon";
    result(area, geo);
}
function ellipse() {
    const minorAxis = parseFloat(document.getElementById("minorAxis").value);
    const majorAxis = parseFloat(document.getElementById("majorAxis").value);
    const area = 3.1416 * minorAxis * majorAxis;
    document.getElementById("minorAxis").value = "";
    document.getElementById("majorAxis").value = "";
    const geo = "Ellipse";
    result(area, geo);
}
//For Blog HTML Page
function blog() {
    window.location = 'blog.html';
}
//For Geometry HTML page
function back() {
    window.location = 'Geometry.html';
}

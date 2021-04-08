document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        var data = document.createElement('span');
        data.style.cssText = 'font-size:14px; font-weight: bold; background-image:linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red); -webkit-background-clip:text; color:transparent;'
        var node = document.createTextNode("Toang:) ");
        data.appendChild(node);
        document.body.appendChild(data);
    });
});
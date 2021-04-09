document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        checkPageButton.parentNode.removeChild(checkPageButton);
        var text = document.getElementById('text');
        text.parentNode.removeChild(text);
        
        var p0 = document.createElement('p');
        p0.classList.add('toang')
        var node0 = document.createTextNode("Không làm mà... À");
        p0.appendChild(node0);
        document.body.appendChild(p0);

        var p1 = document.createElement('p');
        p1.classList.add('toang')
        var node1 = document.createTextNode("Éo có gì đâu mà bấm");
        p1.appendChild(node1);
        document.body.appendChild(p1);
        
        var p3 = document.createElement('p');
        p3.classList.add('toang')
        var node3 = document.createTextNode("Chán thì đi chơi đi");
        p3.appendChild(node3);
        document.body.appendChild(p3);
        
        var p2 = document.createElement('p');
        p2.classList.add('toang')
        var node2 = document.createTextNode("Gà thế :))");
        p2.appendChild(node2);
        document.body.appendChild(p2);

        var img = document.createElement('div');
        img.classList.add('image');
        document.body.appendChild(img);
    });
});

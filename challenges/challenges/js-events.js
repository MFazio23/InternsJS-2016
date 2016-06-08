module.exports = {
    assignEvents: function () {
        document.getElementById('clickable-span').onclick = function () {
            this.style.backgroundColor = this.style.color === 'black' ? 'black' : 'white';
            this.style.color = this.style.color === 'black' ? 'white' : 'black';
        };

        var hoverSpan = document.getElementById('hoverable-span');
        hoverSpan.onmouseover = function() {
            this.style.backgroundColor = 'blue';
            this.style.color = 'white';
        };
        hoverSpan.onmouseout = function() {
            this.style.backgroundColor = 'white';
            this.style.color = 'black';
        };

        var boxes = document.getElementsByClassName('hover-event-box');
        for(var b in boxes) {
            if(boxes.hasOwnProperty(b)) {
                var box = boxes[b];
                box.onmouseover = function() {
                    this.style.backgroundColor = 'green';
                };
                box.onmouseout = function() {
                    this.style.backgroundColor = 'white';
                };
            }
        }
    }

};
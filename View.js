// функция рисования клеток и символов на canvas 
function drawPole(num) {
    canvas = document.getElementById("canvas" + num); // создаем канвас
    canvas.width = SIZE * SIDE; // вычисляем высоту и ширину
    canvas.height = SIZE * SIDE;
    context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.getContext) { // рисуем поле
        for (var i = 0; i < SIDE; i++) {
            for (var j = 0; j < SIDE; j++) {
                rects[i][j].draw();
                if (!first === !! num || first === !! !num) symbs_this[i][j].draw(false, true);
            }
        }
    }
}

// скрипт мигающих точек
(function waiting() {

    setInterval(function() {
        $('#bullet1').fadeToggle(500);
    }, 500);
    setTimeout(function() {
        setInterval(function() {
            $('#bullet2').fadeToggle(500);
        }, 500);
    }, 300);
    setTimeout(function() {
        setInterval(function() {
            $('#bullet3').fadeToggle(500);
        }, 500);
    }, 600);
})();
// waiting();

// переключатель экранов
function Screens() {
    this.show = function(num) {
        for (var i = 0; i < game.childNodes.length; i++) {
            if (game.childNodes[i].nodeName !== '#text') $(game.childNodes[i]).fadeOut(500);
        }
        $('#screen' + num).fadeIn(500);
    }

}
var screens = new Screens();

// переключатель индикаторов
function Indicators() {
    this.show = function(name) {
        for (var i = 0; i < connectingBlocks.childNodes.length; i++) {
            if (connectingBlocks.childNodes[i].nodeName !== '#text') $(connectingBlocks.childNodes[i]).fadeOut(500);
        }
        $('#' + name).fadeIn(500);
    }
    this.hide = function(name) {
        setTimeout(function() { // 
            $('#' + name + '').fadeOut(2000);
        }, 3000);
    }

}
var indicators = new Indicators();
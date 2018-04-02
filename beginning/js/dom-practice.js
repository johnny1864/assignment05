/*eslint-env browser*/

//STEP 1
/*
function alertBtn(){
    window.alert('I have been clicked');
}
*/

//STEP 2
/*
window.addEventListener('load', function () {
    "use strict";

    var btn = document.getElementById('btn1');

    btn.onclick = function () {
        window.alert('I have been clicked');
    };

});
*/

//STEP 3
/*
window.addEventListener('load', function () {
    "use strict";

    var btn = document.getElementById('btn1');

    var clicked = function () {
        window.alert('I have been clicked');
    };

    btn.addEventListener('click', clicked);
});
*/

//STEP 4
/*
window.addEventListener('load', function () {
    "use strict";

    var btn = document.getElementById('btn1');

    btn.addEventListener('click', function () {
        window.alert('I have been clicked');
    });//END btn CLICK EVENT LISTENER
});
*/

//STEP 5
/*
window.addEventListener('load', function () {
    "use strict";

    var btn = document.getElementById('btn1');

    btn.addEventListener('click', function () {
        window.alert('I have been clicked');
    });

});
*/

//STEP 6
/*
window.addEventListener('load', function () {
    "use strict";

    var googleLink = document.getElementById('redirect');
    

    googleLink.addEventListener('click', function () {
        window.alert('I have been clicked');
    });

});

*/

//STEP 7
/*
window.addEventListener('load', function () {
    'use strict';
    var btn = document.getElementById('submit');

    btn.addEventListener('click', function () {
        btn.disabled = true;
        var text = document.getElementById('message').value;
        
        document.getElementById('writeTo').innerHTML = text;
    });
});
*/

//STEP 8
/*
window.addEventListener('load', function () {
    'use strict';
    var btn = document.getElementById('new-page');

    btn.addEventListener('click', function () {
        window.open('newpage.html', 'new page', 'width=300, height=300');
    });
});
*/

//STEP 9
/*
window.addEventListener('load', function () {
    "use strict";
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');

    var show = false;
    var interval;

    function showText() {
        if (!show) {
            document.getElementById('text').innerHTML = "Learning JavaScript is fun!";
            show = true;
        } else {
            document.getElementById('text').innerHTML = " ";
            show = false;
        }
    }

    start.addEventListener('click', function () {
        interval = setInterval(showText, 2000);
    });

    stop.addEventListener('click', function () {
        clearInterval(interval);
        document.getElementById('text').innerHTML = " ";
    });
});
*/

//STEP 10

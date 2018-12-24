(function(global){
    'use strict';

    function showDialog() {
        global.alert("Hello")
    }

    document.querySelector('.firstbutton').addEventListener('click', showDialog, false);

})(window)
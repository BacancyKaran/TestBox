jQuery(document).ready(function(){
    var num_steps = 3;
    var cur_step = 2;
    var seconds = 7;
    temp();
    setInterval(calcValues, 1000);
    function temp() {
        setTimeout( function() {
            jQuery('.elementor-section-boxed').removeClass('show-boxed');
            jQuery('.box-' + cur_step).addClass('show-boxed');
            
            cur_step += 1;
            if ( cur_step > num_steps ) {
                cur_step = 1;
            }
            temp();
            ontype(cur_step);
        }, 7000);
        
    }

    function calcValues() {
        seconds -= 1;
        jQuery(".circle-box").html(" " + seconds);
        if ( seconds == 0 ) {
            seconds = 7;
        }
    }
});


function ontype(cur_step){

    typedOne = jQuery(".show-boxed #typedone");
    typedtwo = jQuery(".show-boxed #typedtwo");
    typethree = jQuery(".show-boxed #typethree");

    if(cur_step === 1){
        jQuery(".show-boxed #typedone").typed({
            strings: ["Consistent"],
            typeSpeed: 60,
            startDelay: 0,
            backSpeed: 60,
            backDelay: 4800,
            loop: true,
            cursorChar: "|",
            contentType: 'html'
        });
    }

    jQuery(".show-boxed #typedtwo").typed({
        strings: ["Visionary"],
        typeSpeed: 60,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 4920,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    });

    jQuery(".show-boxed #typethree").typed({
        strings: ["Ingenious"],
        typeSpeed: 60,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 4920,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    });
}

jQuery(window).load(function(){

    jQuery(".show-boxed #typedone").typed({
        strings: ["Consistent"],
        typeSpeed: 60,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 4800,
        loop: false,
        cursorChar: "|",
        contentType: 'html'
    });

//     jQuery(".show-boxed #typedtwo").typed({
//         strings: ["Visionary"],
//         typeSpeed: 60,
//         startDelay: 0,
//         backSpeed: 60,
//         backDelay: 4920,
//         loop: false,
//         cursorChar: "|",
//         contentType: 'html'
//     });

//     jQuery(".show-boxed #typethree").typed({
//         strings: ["Ingenious"],
//         typeSpeed: 60,
//         startDelay: 0,
//         backSpeed: 60,
//         backDelay: 4920,
//         loop: false,
//         cursorChar: "|",
//         contentType: 'html'
//     });

});

// 'use strict';

// const type = document.querySelector('.type-text');

// let listTexts = ['Simply','Differently'];

// let index = -1;
// let current = 0;

// function typeTextFunc() {
//     if (current === listTexts.length) {
//         current = 0;
//     }
//     let typeText = setInterval(() => {
//         if (index == listTexts[current].length - 1) {
//             clearInterval(typeText);
//             clearTextFunc();
//         } else {
//             index++;
//             type.textContent += listTexts[current][index];
//         }
//     }, 130);
// };

// function clearTextFunc() {
//     let clearText = setInterval(() => {
//         if (type.textContent.length == 0) {
//             clearInterval(clearText);
//             index = -1;
//             current++
//             typeTextFunc();
//         } else {
//             type.textContent = type.textContent.slice(0, -1)
//         }
//     }, 200);
// };

// typeTextFunc();

/*email animation*/ 

// jQuery(".formFill button").click(function(){
//     var $this=jQuery(this);
//     var width=$this.outerWidth();
//     var inputWidth=$this.siblings("input").outerWidth();
    
//     $this.attr("disabled",true);
//     $this.text("Our team will get back to you sortly");
    
//     $this.animate({
//         width:width+287,
//         "margin-left":-inputWidth
//     });
    
//     setTimeout(function(){
//         //succeed
//         $this.text("Our team will get back to you shortly");
        
//         setTimeout(function(){
//             //return to normal
//             $this.attr("style","");
//             $this.removeAttr("disabled");
//             $this.text("Subscribe");
//         },2000);
//     },3000);
            
// });

$(function () {
    let location = window.location.href;
    let cur_url = '/' + location.split('/').pop();
 
    $('.menu__list li').each(function () {
        let link = $(this).find('a').attr('id');
 
        if (cur_url === link) {
            $(this).addClass('active');
        }
    });
});

//Цвет блоков pricing
var elem_first = document.getElementById("first");
var elem_first_btn = document.getElementById("first_btn");
var elem_second = document.getElementById("second");
var elem_second_btn = document.getElementById("second_btn");
var elem_third = document.getElementById("third");
var elem_third_btn = document.getElementById("third_btn");


    elem_first.onclick = function () {

        if(this.style.backgroundColor)
            this.style.backgroundColor = "";


        else
           this.style.backgroundColor = "#3C82F4";
           elem_first_btn.style.backgroundColor = "#fff";
           elem_first_btn.style.color = "#3C82F4";
           elem_second.style.backgroundColor = "";
           elem_second_btn.style.backgroundColor = "";
           elem_second_btn.style.color = "#fff";
           elem_third.style.backgroundColor = "";
           elem_third_btn.style.backgroundColor = "";
           elem_third_btn.style.color = "#fff";
      }
      elem_second.onclick = function () {

        if(this.style.backgroundColor)
          this.style.backgroundColor = "";

        else
           this.style.backgroundColor = "#3C82F4";
            elem_first.style.backgroundColor = "";
            elem_first_btn.style.backgroundColor = "";
            elem_first_btn.style.color = "#fff";
            elem_third.style.backgroundColor = "";
            elem_third_btn.style.backgroundColor = "";
            elem_third_btn.style.color = "#fff";
            elem_second_btn.style.backgroundColor = "#fff";
            elem_second_btn.style.color = "#3C82F4";
      }
      elem_third.onclick = function () {

        if(this.style.backgroundColor)
          this.style.backgroundColor = "";

        else
           this.style.backgroundColor = "#3C82F4";
            elem_third_btn.style.backgroundColor = "#fff";
            elem_third_btn.style.color = "#3C82F4";
            elem_first.style.backgroundColor = "";
            elem_first_btn.style.backgroundColor = "";
            elem_first_btn.style.color = "#fff";
            elem_second.style.backgroundColor = "";
            elem_second_btn.style.backgroundColor = "";
            elem_second_btn.style.color = "#fff";
      }


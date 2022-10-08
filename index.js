var num = 7;
var main = document.querySelector(".main");
createButtons(num);

function createButtons(num){
    for (var i = 0; i < num; i++)
    {
        var button = document.createElement('button');
        button.className= "button";
        main.appendChild(button);
        button.innerText = "Click me " + i ;
        button.addEventListener("click", function(event) {
            const picker = event.target;
            alert(picker.innerText);
          });
    }
  };


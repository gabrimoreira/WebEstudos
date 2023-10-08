//I tried to use the function eval(), because of this channel (Tech2 etc) of this video:https://www.youtube.com/watch?v=HQCLzqhiT2w, but It didn't work.

(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "Please enter a value";
        }
        else{
            let values = screen.value.split(/(\+|\-|\*|\/)/g);
            let answer = parseFloat(values[0]);
            for(let i = 1; i < values.length; i += 2){
                let operator = values[i];
                let operand = parseFloat(values[i + 1]);
                if(operator === '+'){
                    answer += operand;
                }
                else if(operator === '-'){
                    answer -= operand;
                }
                else if(operator === '*'){
                    answer *= operand;
                }
                else if(operator === '/'){
                    answer /= operand;
                }
            }
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    })
})();
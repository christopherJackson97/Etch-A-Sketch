function createGrid(){
    let amount = document.getElementById("amount").value;
    const gridParent = document.querySelector(".grid-container");
    gridParent.innerHTML = '';
    if(amount == 0){
        return;
    }
    else{
        if(amount == 16){
            for(i = 0; i < amount; i++){
                let div = document.createElement('div');
                div.setAttribute('id', i);
                div.setAttribute('onclick', 'color(' + i + ')');
                gridParent.append(div);
            }
        }
        else{
            if(amount > 16){
                for(i = 0; i < amount; i++){
                    let padding = (25/amount) * 20;
                    let div = document.createElement('div');
                    div.setAttribute('id', i);
                    div.style.padding = padding + 'px'; 
                    div.setAttribute('onclick', 'color(' + i + ')');                  
                    gridParent.append(div);
                }
            }
        }
    }
    

}
function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}

function color(num){
    let blue = getRandomNumber();
    let red = getRandomNumber();
    let green = getRandomNumber();

    const element = document.getElementById(num);
    element.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    
}
var slider = document.getElementById('in')

function velo(){
    if (this.slider.value>55){
        document.getElementById('dif').innerHTML = ('Facil')
    }

    if (this.slider.value < 55 && this.slider.value > 45){
        document.getElementById('dif').innerHTML = ('Medio')
    }

    if (this.slider.value<45){
        document.getElementById('dif').innerHTML = ('Dificil')
    }
    return slider.value
}


window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,slider.value);
}

// posicao
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;

function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 1;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="#000000c8";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail =5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
        document.getElementById('pts').textContent = tail-5
    }
    ctx.fillStyle="red";
    // posição da maca
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        // seta pra esquerda
        case 37:
            xv=-1;yv=0;
            break;
        // seta pra cima
        case 38:
            xv=0;yv=-1;
            break;
        // seta pra direita
        case 39:
            xv=1;yv=0;
            break;
        // seta pra baixo
        case 40:
            xv=0;yv=1;
            break;
    }
}


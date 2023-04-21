class Board {
    constructor(holder, settings) {
        this.holder = holder;
        this.settings = settings;
        this.bets = [];

        this.init();
    }

    init() {
        this.cursorChip = this.holder.querySelector(".chip-cursor")

        this.holder.addEventListener("mousemove", this.onMove.bind(this))
        this.holder.addEventListener("mouseenter", this.onEnter.bind(this))
        this.holder.addEventListener("mouseleave", this.onLeave.bind(this))
        this.holder.addEventListener("click", this.onBet.bind(this))
    }

    onEnter(e) {
        this.cursorChip.style.display = "block";
    }

    onLeave() {
        this.cursorChip.style.display = "none";
    }

    onMove(e) {
        this.cursorChip.style.top = e.layerY + 10 + "px";
        this.cursorChip.style.left = e.layerX + 10 + "px";
    }

    onBet(e){
        if(!e.target.classList.contains('board')){
            this.cursorChip = this.holder.querySelector(".chip-cursor")
            if(this.cursorChip.textContent == 1){
                if(e.target.textContent != 0){
                    e.target.classList.remove('chip-placed-2', 'chip-placed-3');
                    e.target.classList.add('chip-placed-1');
                }else{
                    e.target.classList.remove('chip-placed-2', 'chip-placed-3');
                    e.target.classList.add('chip-placed-1-zero')
                }
            }if(this.cursorChip.textContent == 2){
                if(e.target.textContent != 0){
                    e.target.classList.remove('chip-placed-1', 'chip-placed-3');
                    e.target.classList.add('chip-placed-2');
                }else{
                    e.target.classList.remove('chip-placed-1-zero', 'chip-placed-3-zero');
                    e.target.classList.add('chip-placed-2-zero');
                }
            }if(this.cursorChip.textContent == 5){
                if(e.target.textContent != 0){
                    e.target.classList.remove('chip-placed-1', 'chip-placed-2');
                    e.target.classList.add('chip-placed-3');
                }else{
                    e.target.classList.remove('chip-placed-1-zero', 'chip-placed-2-zero');
                    e.target.classList.add('chip-placed-3-zero');
                }
            }
            this.bets.push(e.target);
        }
    }

    reset() {

    }

}
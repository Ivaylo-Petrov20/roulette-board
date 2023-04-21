class App {
    constructor(holder) {
        this.holder = holder;

        this.initBoard()
        this.initChips();
        this.initButtons();
    }

    initBoard() {
        this.board = new Board(this.holder.querySelector(".board"))
    }

    initChips() {
        this.chips = new Chips(this.holder.querySelector(".chips"))
    }

    initButtons() {
        this.undo = new Button(this.holder.querySelector(".icon-undo"), () => {
            const currentEl = this.board.bets.pop();
            if(currentEl.classList.contains('chip-placed-1-zero') 
            || currentEl.classList.contains('chip-placed-2-zero') 
            || currentEl.classList.contains('chip-placed-3-zero')){
                currentEl.classList.remove('chip-placed-1-zero', 'chip-placed-2-zero', 'chip-placed-3-zero')
            }else{
                currentEl.classList.remove('chip-placed-1', 'chip-placed-2', 'chip-placed-3')
            }
        })

        this.clear = new Button(this.holder.querySelector(".icon-clear"), () => {
            
            this.board.bets.forEach((x) => {
                if(x.classList.contains('chip-placed-1-zero') 
                || x.classList.contains('chip-placed-2-zero') 
                || x.classList.contains('chip-placed-3-zero')){
                    x.classList.remove('chip-placed-1-zero', 'chip-placed-2-zero', 'chip-placed-3-zero')
                }else{
                    x.classList.remove('chip-placed-1', 'chip-placed-2', 'chip-placed-3')
                }
            })
        })

        this.double = new Button(this.holder.querySelector(".icon-double"), () => {
            console.log("double")
            this.board.bets.forEach(x => {
                if(x.classList.contains('chip-placed-1')){
                    x.classList.remove('chip-placed-1');
                    x.classList.add('chip-placed-2');
                    return;
                }else if(x.classList.contains('chip-placed-1-zero')){
                    x.classList.remove('chip-placed-1-zero');
                    x.classList.add('chip-placed-2-zero');   
                }else if(x.classList.contains('chip-placed-2')){
                    x.classList.remove('chip-placed-2');
                    x.classList.add('chip-placed-3');
                    return;
                }else if(x.classList.contains('chip-placed-2-zero')){
                    x.classList.remove('chip-placed-2-zero');
                    x.classList.add('chip-placed-3-zero');
                }
            });
        })
    }
    
}

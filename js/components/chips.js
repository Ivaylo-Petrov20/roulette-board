class Chips {
    constructor(holder, settings) {
        this.holder = holder;
        this.settings = settings;

        // console.log(holder)

        this.init();
    }

    init() {
        for (let i = 0; i < this.holder.children.length; i++) this.holder.children[i].addEventListener("click", this.onSelect.bind(this)); 
        this.cursorChip = document.querySelector(".chip-cursor");    
        for (let i = 0; i < this.holder.children.length; i++) {
            if(this.holder.children[i].classList.contains('active')){
                this.cursorChip.className = `chip-cursor chip-${this.holder.children[i].textContent}`;
                this.cursorChip.textContent = this.holder.children[i].textContent;
            }
        }
    }

    onSelect(e) {
        let target = e.currentTarget;
        for (let i = 0; i < this.holder.children.length; i++) {
            let chip = this.holder.children[i];
            chip.classList[chip === target ? "add" : "remove"]("active");
        }
        this.cursorChip = document.querySelector(".chip-cursor");
        if(target.textContent == 1){
            this.cursorChip.className = 'chip-cursor chip-1';
            this.cursorChip.textContent = 1;
        }else if(target.textContent == 2){
            this.cursorChip.className = 'chip-cursor chip-2';
            this.cursorChip.textContent = 2;
        }else if(target.textContent == 5){
            this.cursorChip.className = 'chip-cursor chip-3';
            this.cursorChip.textContent = 5;
        }
        
    }

    reset() {

    }

}
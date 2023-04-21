class Button {
    constructor(holder, settings) {
        this.holder = holder;
        this.settings = settings;

        this.init();
    }

    init() {
        this.holder.addEventListener("click", this.settings);
    }

}
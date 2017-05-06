import $ from '../../../bower_components/jquery/dist/jquery.js';

class MenuIcon {

    constructor() {
        this.menu = $('.menu-icon');
        this.menuBars = $('.menu-icon div');
        this.events();
    }

    events() {
        this.menu.click(this.toggleTheMenu.bind(this));

    }

    toggleTheMenu() {
        this.menu.toggleClass('change');
    }
}

export default MenuIcon;
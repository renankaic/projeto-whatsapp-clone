class WhatsAppController {

    constructor() {

        console.log("WhatsApp Controller OK");

        //Loads all elements from HTML
        this.loadElements();

    }

    loadElements() {   

        this.el = {};

        document.querySelectorAll('[id]').forEach( element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });

    }

}
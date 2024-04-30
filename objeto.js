class Objeto {
    constructor (parametro1, parametro2) {
        this.parametro1 = parametro1;
        this.parametro2 = parametro2;
    }

    metodo1 () {

    }

    metodo2 () {

    }
}


class Lorrainy {
    constructor (site) {
        this.site = site;
    }

    exibirSite () {
        window.open(this.site);
    }
}

var novoObjeto = new Objeto ("https://littlealchemy2.com/br");
novoObjeto.exibirSite();
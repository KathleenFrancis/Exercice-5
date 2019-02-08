import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} motAnime - contient l'ensemble des caractères à animer
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(motAnime, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.motAnime = motAnime;
        this.elmParent = elementParent;
        this.AnimerLettre(this.motAnime);
        console.log('constructor');
        this.fonction = fonction;
    }

    AnimerLettre(motAnime) {
        console.log(`mot animé = ${motAnime}`)
        let elmConteneur = this.creerElement(this.elmParent,
            'section',
            '',
            'mot');

        for (let i=0; i<this.motAnime.length; i++) {
            let e = this.creerElement(elmConteneur,'div', this.motAnime[i], '');
            e.style.animationDelay = (i * 0.5) + "s";
        }
		
		window.setTimeout(function () {
			window.location.reload();
		}, 20000);
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise);
        let noeud = document.createElement(balise);
        if (contenu != '') {
            noeud.innerHTML = contenu;
        }
        if (classCSS != '') {
            noeud.classList.add(classCSS);
        }
        elmParent.appendChild(noeud);
        return noeud;
    }

}
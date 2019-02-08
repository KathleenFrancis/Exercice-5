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
        this.AnimerLettre(motAnime);
        console.log('constructor');
        this.fonction = fonction;
    }

    AnimerLettre() {

    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        if (classCSS != '') {
            noeud.classList.add(classCSS)
        }
        elmParent.appendChild(noeud)
        return noeud
    }

}
//.onload permet que le JS contenu s'affiche en méme temps avec la page html

window.onload = function () {


    // declarations des variables 

    const modal = document.getElementById("myModal")
    const modalDeux = document.getElementById("myModalDeux")
    const btnDeux = document.getElementById("myBtnDeux")
    const btn = document.getElementById("myBtn")
    const span = document.getElementsByClassName("close")[0]
    const spanDeux = document.getElementsByClassName("close")[1]

    //Définition des fonction avec .onclick

    btnDeux.onclick = function () {
        modalDeux.style.display = "block";
    }
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";

    }
    spanDeux.onclick = function () {
        modalDeux.style.display = "none";

    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == modalDeux){
            modalDeux.style.display = "none"
        }
    }
    

    // function get_random qui retourn un numero aleatoire d'une liste

    function get_random(list) {
        return list[Math.floor((Math.random() * list.length))];
    }

    // declarations des variables article 1 avec boite modale 1
    const texteArticle1 = document.getElementById('texteArticle1')
    const dateArticle1 = document.getElementById('dateArticle1')
    const titreArticle1 = document.getElementById('titreArticle1')
    const titreBoiteModalUn = document.getElementById('titreBoiteModalUn')
    const texteArticleUn = document.getElementById('texteArticleUn')
    const modalImage=document.getElementById('modalImage')



    // declarations des variables article 2 avec boite modale 2


    const dateArticle2 = document.getElementById('dateArticle2')
    const texteArticle2 = document.getElementById('texteArticle2')
    const titreArticle2 = document.getElementById('titreArticle2')
    const texteArticleDeux = document.getElementById('texteArticleDeux')
    const modalImageDeux = document.getElementById('modalImageDeux')
    const titreBoiteModalDeux = document.getElementById('titreBoiteModalDeux')

    // declaration de la liste et la variable choix 
    let liste = [1, 2, 3]
    let choix = get_random(liste)


    // utilisation du methode fetch pour recuperer les articles

    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=' + choix)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    Object.values(data.date).forEach(element => {
                        dateArticle1.innerHTML += element + ' '
                    });
                    titreArticle1.innerHTML = data.title
                    texteArticle1.innerHTML = (data.content[choix]).slice(0,90)
                    titreBoiteModalUn.innerHTML = data.title
                    texteArticleUn.innerHTML=data.content
                    modalImage.src=data.picture
                
                })
            } else {
                console.log("ERREUR")
            }
        })
        choix=get_random(liste)

        fetch('https://www.tbads.eu/greta/kercode/ajax/?article=' + choix)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    Object.values(data.date).forEach(element => {
                        dateArticle2.innerHTML += element + ' '
                    });
                    titreArticle2.innerHTML=data.title
                    texteArticle2.innerHTML = (data.content[choix]).slice(0,90)
                    titreBoiteModalDeux.innerHTML = data.title
                    texteArticleDeux.innerHTML=data.content
                    modalImageDeux.src=data.picture
                })
            } else {
                console.log("ERREUR")
            }
        })

}

//    Les fonctions qui ouvre et ferme un formulaire


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


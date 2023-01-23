//.onload permet que le JS contenu s'affiche en méme temps avec la page html

window.onload = function () {


    // declarations des variables 

    const modal = document.getElementById("myModal")
    const modalDeux = document.getElementById("myModalDeux")
    const btnDeux = document.getElementById("myBtnDeux")
    const btn = document.getElementById("myBtn")
    const span = document.getElementsByClassName("close")[0]

    //Définition des fonction avec .onclick

    btnDeux.onclick = function () {
        modalDeux.style.display = "block";
    }
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
        modalDeux.style.display = "none";

    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // function get_random qui retourn un numero aleatoire d'une liste

    function get_random(list) {
        return list[Math.floor((Math.random() * list.length))];
    }

    // declarations des variables 

    const dateArticle1 = document.getElementById('dateArticle1')
    const titreArticle1 = document.getElementById('titreArticle1')
    const dateArticle2 = document.getElementById('dateArticle2')
    const titreArticle2 = document.getElementById('titreArticle2')
    const texteArticleUn = document.getElementById('texteArticleUn')
    const texteArticleDeux = document.getElementById('texteArticleDeux')
    const modalImageDeux = document.getElementById('modalImageDeux')
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
                    texteArticleUn.innerHTML=data.content[0]
                    titreArticle1.innerHTML = data.title
                    titreArticle1.innerHTML += data.content[0].slice(0,60)
                })
            } else {
                console.log("ERREUR")
            }
        })

        fetch('https://www.tbads.eu/greta/kercode/ajax/?article=' + choix)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    Object.values(data.date).forEach(element => {
                        dateArticle2.innerHTML += element + ' '
                    });
                    texteArticleDeux.innerHtml = data.content[0]
                    console.log(texteArticleDeux)
                    titreArticle2.innerHTML = data.title
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


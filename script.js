 // function get_randomm qui retourne un numero aleatoire d'une liste

 function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
}
// declaration de la liste et la variable choix 
let liste = [1, 2, 3]
let choix = get_random(liste)

// utilisation du methode fetch pour recuperer les articles
for (let i = 0; i < 2; i++) {
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=' + choix)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {

                    // les variable des deux articles 

                    let contenuArticle= document.getElementById("contenuArticle" + i);
                    let dateArticle = document.createElement('p');
                    
                    let descriptionArticle = document.createElement('p');
                    dateArticle.innerHTML = data.date['day'] + " " + data.date['month'] + " " + data.date['year'];
        
                    descriptionArticle = data.content[0].slice(0, 90);
                    contenuArticle.append(dateArticle, descriptionArticle)

                    //les variables des deux boites modales
                    let modalHeader = document.getElementById('modal-header'+i);
                    let modalBody = document.getElementById('modal-body'+i);
                    let modalFooter = document.getElementById('modal-footer'+i);
                    let modalImage = document.createElement('img');
                    modalImage.style['width'] = '100%';
                    
                    modalHeader.innerHTML = data.title;
                    Object.values(data.content).forEach(element => {
                        let nouveauParagraphe = document.createElement('p')
                        nouveauParagraphe.innerHTML = ">" + element;
                        modalBody.appendChild(nouveauParagraphe);
                    });
                    modalFooter.innerHTML=data.author['name'] + ' ' + data.author['surname'] + ' ' + data.author['position'];
                    modalBody.appendChild(modalImage);
                    modalImage.src=data.picture;
                })
            } else {
                console.log("ERREUR")
            }
        })

    //supprimer l'element de la liste déja utilisé

    liste.splice(liste.indexOf(choix),1);
    choix = get_random(liste)
}


//    Les fonctions qui ouvre et ferme un formulaire
function openForm() {
document.getElementById("myForm").style.display = "block";
}
function closeForm() {
document.getElementById("myForm").style.display = "none";
}
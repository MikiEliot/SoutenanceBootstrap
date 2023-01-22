function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
function getArticle(){
    document.getElementById("url").textContent = document.URL;
}

function submitForm(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    fetch('action_page.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    console.log(response)
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            closeForm();
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}
function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }


function afficheArticle(){
    const articleUn = document.getElementById('articleUn')
    let liste = [1,2,3]
    let choix = get_random(liste)
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article='+choix)
        .then(res=>{
            console.log(res)
            if(res.ok){
                res.json().then(data => { 
                    console.log(res)
                    console.log(JSON.stringify(data))
                    articleUn.innerHTML =JSON.stringify(data)
                })}
            else {
                console.log("ERREUR")
            }

})}
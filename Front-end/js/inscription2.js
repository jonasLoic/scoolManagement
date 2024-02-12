$(function(){
    var $insrireForm = $("#insrire");
    if($insrireForm.length){
        $insrireForm.validate({
            rules:{
                Matricule:{
                    required: true
                },
                Niveau:{
                    required: true
                },
            },
            messages:{
                Matricule:{
                    required: 'champ obligatoire'
                },
                Niveau:{
                    required: 'champ obligatoire'
                },
            },
            submitHandler: function(form) {
                const urlParams = new URLSearchParams(window.location.search);
                const name= urlParams.get("name")
                const number = urlParams.get("number")
                const prenom = urlParams.get("prenom")
                const email = urlParams.get("email")
                window.location.href = `http://127.0.0.1:5500/inscrire3.html?name=${name}&number=${number}&prenom=${prenom}&email=${email}&Matricule=${$('#MatriculeStud').val()}&Filiere=${$('#filiere').val()}&Niveau=${$('#niveau').val()}`;
           }
        })
    }
})

$(function(){
    var $insrire_profForm = $("#insrire_prof");
    if($insrire_profForm.length){
        $insrire_profForm.validate({
            rules:{
                Matricule:{
                    required: true
                },
                UE:{
                    required: true
                },
            },
            messages:{
                Matricule:{
                    required: 'champ obligatoire'
                },
                UE:{
                    required: 'champ obligatoire'
                },
            },
            submitHandler: function(form) {
                const urlParams = new URLSearchParams(window.location.search);
                const name= urlParams.get("name")
                const number = urlParams.get("number")
                const prenom = urlParams.get("prenom")
                const email = urlParams.get("email")

                localStorage.setItem('Matricule', $('#MatriculeProf').val())
                localStorage.setItem('UE', $('#UE').val())
                window.location.href = `http://127.0.0.1:5500/inscrire3.html?name=${name}&number=${number}&prenom=${prenom}&email=${email}&Matricule=${$('#MatriculeProf').val()}&UE=${$('#UE').val()}`;
           }
        })
    }
})
$("#insrire_prof").hide()
    $("#insrire").hide()
$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("name"))
console.log(urlParams.get("number"))
console.log(urlParams.get("prenom"))
console.log(urlParams.get("email"))


    
    $("#button_etud").click(function(){
        $("#insrire_prof").hide()
        $("#insrire").show()
    });
  });

  $(document).ready(function(){
    $("#connect_prof").click(function(){
        $("#insrire_prof").show()
        $("#insrire").hide()
    });
  });
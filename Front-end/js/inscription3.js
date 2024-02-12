$(function(){
    var $inscrire2Form = $("#inscrire2");
    if($inscrire2Form.length){
        $inscrire2Form.validate({
            rules:{
                password:{
                    required: true,
                },
                confirm_password:{
                    required: true,
                }
            },
            messages:{
                password:{
                    required: 'champ obligatoire',
                },
                confirm_password:{
                    required: 'champ obligatoire',
                }
            },
            submitHandler: function(form) {
                const urlParams = new URLSearchParams(window.location.search);
              
                const user = urlParams.get('UE')?{

                    name: urlParams.get("name"),
                    email:urlParams.get("email"),
                    number: urlParams.get("number"),
                    prenom: urlParams.get("prenom"),
                    Matricule: urlParams.get('Matricule'),
                    UE: urlParams.get('UE'),
                    password: $('#password').val(),
                 }:{
                    name: urlParams.get("name"),
                    email:urlParams.get("email"),
                    number: urlParams.get("number"),
                    prenom: urlParams.get("prenom"),
                    Matricule: urlParams.get('Matricule'),
                    password: $('#password').val(),
                    filiere:urlParams.get("Filiere"),
                    niveau: urlParams.get('Niveau')
                 }
                 console.log('user')       
                 console.log(user)       
                axios.post('http://localhost:3000/api/auth/signup', {user} )
                .then(function (response) {
                   if(response.error){

                   }else{
                    console.log(response)
                    window.location.href = "http://127.0.0.1:5500/Accueil.html";
                   }
                })
                .catch(function (error) {
                    console.log(error);
                });
           }
        })
    }
})
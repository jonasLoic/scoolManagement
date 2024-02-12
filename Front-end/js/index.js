$(function(){
    var $inscrire2Form = $("#inscrire2");
    if($inscrire2Form.length){
        $inscrire2Form.validate({
            rules:{
                user_name:{
                    required: true
                },
                password:{
                    required: true
                },
                email:{
                    required: true
                },
            },
            messages:{
                user_name:{
                    required: 'champ obligatoire'
                },
                password:{
                    required: 'champ obligatoire'
                },
                email:{
                    required: 'champ obligatoire'
                },
            },
            submitHandler: function(form) {
                const user={

                    email: $('#email').val(),
                    password: $('#password').val()
                 }
                  
                axios.post('http://localhost:3000/api/auth/login', {user} )
                .then(function (response) {
                   if(response.error){

                   }else{
                    console.log("reponse")
                    console.log(response.data.token)
                    console.log(response.data.userId)

                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('token', response.data.token);
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
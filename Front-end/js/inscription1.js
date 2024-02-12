$(function(){
    var $inscrire2Form = $("#inscrire2");
    if($inscrire2Form.length){
        $inscrire2Form.validate({
            rules:{
                number:{
                    required: true
                },
                prenom:{
                    required: true
                },
                name:{
                    required: true
                },
                email:{
                    required: true
                },
            },
            messages:{
                number:{
                    required: 'champ obligatoire'
                },
                prenom:{
                    required: 'champ obligatoire'
                },
                name:{
                    required: 'champ obligatoire'
                },
                email:{
                    required: 'champ obligatoire'
                },
            },
            submitHandler: function(form) {
                localStorage.setItem('name', $('#name').val())
                localStorage.setItem('number', $('#number').val())
                localStorage.setItem('prenom', $('#prenom').val())
                localStorage.setItem('email', $('#email').val())
                
                window.location.href = `http://127.0.0.1:5500/inscrire2.html?name=${$('#name').val()}&number=${$('#number').val()}&prenom=${$('#prenom').val()}&email=${$('#email').val()}`;
           }
        })
    }
})

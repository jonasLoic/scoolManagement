$(function(){
    var $inscrire1Form = $("#inscrire1");
    if($inscrire1Form.length){
        $inscrire1Form.validate({
            rules:{
                name:{
                    required: true
                },
                email:{
                    required: true
                },
                text:{
                    required: true
                }
            },
            messages:{
                name:{
                    required: 'champ obligatoire'
                },
                email:{
                    required: 'champ obligatoire'
                },
                text:{
                    required: 'champ obligatoire'
                }
            },
            submitHandler: function(form) {
                 window.location.href = "file:///C:/Users/23765/Desktop/ASM%20Afrik/Mon%20th%C3%A8me/inscrire2.html";
            }
        })
    }
})
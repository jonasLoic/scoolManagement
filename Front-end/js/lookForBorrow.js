$(function(){
    var $modal_empruntForm = $("#modal_emprunt");
    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')

    if($modal_empruntForm.length){
        $modal_empruntForm.validate({
            rules:{
                name:{
                    required: true
                },
                matricule:{
                    required: true
                },
                number:{
                    required: true
                },
                email:{
                    required: true
                },
                date:{
                    required: true
                },
                
                nomMat:{
                    required: true
                },
                date_emprunt:{
                    required: true
                },
            },
            messages:{
                name:{
                    required: 'champ obligatoire'
                },
                matricule:{
                    required: 'champ obligatoire'
                },
                number:{
                    required: 'champ obligatoire'
                },
                email:{
                    required: 'champ obligatoire'
                },
                date:{
                    required: 'champ obligatoire'
                },
                
                nomMat:{
                    required: 'champ obligatoire'
                },
                date_emprunt:{
                    required: 'champ obligatoire'
                },
            },
            submitHandler: function(form) {
                var formData = new FormData();
                    let thing = {
                        name: $('#text').val(),
                        matricule: $('#regis_number').val(),
                        number: $('#number').val(),
                        email: $('#email').val(),
                        date: $('#date').val(),
                        nomMat:$('#nomMat').val(),
                        date_emprunt:$('#date_emprunt').val()
                    }

                    axios.post('http://localhost:3000/api/emprunt', {thing}, {
                        headers: {
                            authorization: `Bearer ${token}`,
                            //userId: `${userId}`
                        }
                    })
                        .then(function (response) {
                            if (response.error) {

                            } else {
                                console.log(response)
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        })

                //on.href = `http://127.0.0.1:5500/inscrire2.html?name=${$('#name').val()}&number=${$('#number').val()}&prenom=${$('#prenom').val()}&email=${$('#email').val()}`;
           }
        })
    }

    const urlParams = new URLSearchParams(window.location.search);
    const id= urlParams.get("Id")

    axios.get(`http://localhost:3000/api/stuff/${id}`, {
    headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
       // userId: `${userId}`
    }
})
    .then(function (response) {
        if (response.error) {

        } else {
            $("#object_infos").html(`
            <div class="row g-0" style=" width: 100%;">
            <div class="col-md-4">
                <img src="${response.data.image}" class="img-fluid rounded-start" alt="...">
            </div>
                <div class="col-md-8">
                    <div class="card-body">
                                <h5 class="card-title">${response.data.name}</h5>
                                <p class="card-text">
                                        ${response.data.comments}
                                </p>
                    </div>
                        
                    <div class="container">
                    <button id="borrowObject" style="background-color:  #242d6e;" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Emprunter</button>
                    
                </div>
            </div>
    </div>
            `)
            $("#borrowObject").click(()=>{
                $("#nomMat").val(response.data.name)
            })

            
        } 
    })
})


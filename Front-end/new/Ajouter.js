

$(function () {
    var $ajouterForm = $("#ajouter");
    console.log("token")
    let isUpdate = false
    objectId =""

    let token = localStorage.getItem('token')
    const loader = $(`<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`);

    $('#objet_list').html(loader);
    $("#loader").html(loader)
    function validateForm($Fom){
        if ($Fom.length) {
            $Fom.validate({
                rules: {
                    name: {
                        required: true
                    },
                    image: {
                        required: true
                    },
                    number: {
                        required: true
                    },
                    coment: {
                        required: true
                    },
                },
                messages: {
                    name: {
                        required: 'champ obligatoire'
                    },
                    image: {
                        required: 'champ obligatoire'
                    },
                    number: {
                        required: 'champ obligatoire'
                    },
                    coment: {
                        required: 'champ obligatoire'
                    }
                },
                submitHandler: function (e) {
                    
                    var formData = new FormData();
                    let thingInfo = {
                        name: $('#name-input').val(),
                        comments: $('#comments-input').val(),
                        number: $('#number').val()
                    }
                    formData.append('thing', JSON.stringify(thingInfo))
                    formData.append('image', $('#image-input')[0].files[0])
                    // let authorization= { 
                    //     'token': 'Bearer' + token,
                    //     'userId': userId
                    // }

                if(!isUpdate){
                    console.log("add")
                    axios.post('http://localhost:3000/api/stuff', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
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
                }else{
                    axios.put(`http://localhost:3000/api/stuff/${objectId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        authorization: `Bearer ${token}`,
                        //userId: `${userId}`
                    }
                    })
                    .then(function (response) {
                        if (response.error) {

                        } else {
                            console.log(response)
                            modal-content
                            $(".modal-content").modal('hide')
                            $("#ajouter")[0].reset()
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }

                // }else{
                //     console.log("update")
                //      axios.update('http://localhost:3000/api/stuff', formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //         authorization: `Bearer ${token}`,
                //         //userId: `${userId}`
                //     }
                //     })
                //     .then(function (response) {
                //         if (response.error) {

                //         } else {
                //             console.log(response)
                //             isUpdate= false
                //         }
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     })
                // };
                }
            })
        }
    }
    validateForm($ajouterForm)

    axios.get('http://localhost:3000/api/stuff', {
        headers: {
            'Content-Type': 'multipart/form-data',
            authorization: `Bearer ${token}`,
            //userId: `${userId}`
        }
    })
        .then(function (response) {
            if (response.error) {

            } else {
                console.log("response")
                console.log(response)
                $("#objet_list").html("")
                for (var materiel of response.data) {
                    $("#objet_list").append(`
                                <td class="td"> 
                                        <a style="text-decoration: none; font-size: 20px; text-align: center; color: black; " href="passer_emprunt.html">
                                            ${materiel.name}
                                        </a> 
                                </td>
                                <td class="td"> 
                                     ${materiel.number} 
                                </td>
                                <th style="width: 500px;" class="th"> 
                                        <img src="${materiel.image}" alt="carte arduino" height="80px"> 
                                        <button id="updateObject" style="background-color:  #242d6e;margin-bottom: 50px;" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Modifier</button>                                   
                                         <button style="background-color:  #8e0808;" type="button" id="deleteObject" class="btn btn-info btn-lg">Supprimer</button> 
                                </th>
                        `)
                    $("#updateObject").click(() => { updateOneObject(materiel._id) })
                    $("#deleteObject").click(() => { deleteObject(materiel._id) })

                }
                function deleteObject(id) {
                    console.log("deletion")
                    console.log(id)
                }
                function updateOneObject(id) {
                    objectId =id
                    $("#ajouter").hide()
                    $("#loader").show()
                    isUpdate = true
                    $(".modalUpdate").html(loader)
                    axios.get(`http://localhost:3000/api/stuff/${id}`, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            authorization: `Bearer ${token}`,
                            //userId: `${userId}`
                        }
                    })
                        .then(function (response) {
                            if (response.error) {

                            } else {
                                isUpdate= true
                                $("#addObject").text("Modifier un object ")
                                $("#saveObject").text("Modifier")
                                 $('#name-input').val(response.data.name),
                                 $('#comments-input').val(response.data.comments),
                                 $('#number').val(response.data.number)
                                 $("#ajouter").show()
                                 $("#loader").hide()
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
})
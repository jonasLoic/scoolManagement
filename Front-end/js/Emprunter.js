let token = localStorage.getItem('token')
console.log("list")
axios.get('http://localhost:3000/api/emprunt', {
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
            for (var user of response.data) {
                $(".tabeau").append(`
                <tr>
                     <td> ${user.name} </td>
                     <td> ${user.nomMat} </td>
                     <th>  ${user.date}</th>
                     <th> ${user.date_emprunt} </th>
                     <th>  ${user.number} </th>
               </tr>
                    `)

            }
        }
    })
    .catch(function (error) {
        console.log(error);
    });
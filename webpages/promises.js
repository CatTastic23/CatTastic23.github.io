/* Catherine Nguyen
CSC 196K
Anna Baynes
03/02/2021
*/

function promise() {
    return new Promise((resolve, reject) => {
        var txt = document.getElementById('feedme').value;
        if (txt % 2 == 1) {
            resolve(alert('Success you are an odd one!'))
        }
        else{
            reject(alert("Failed '" + txt + "' is not odd."))
        }
    })
}
async function createUser() {
    const username = $('#username').val()
    const age = $('#age').val()
    const password = $('#password').val()
   
    try {
        const res = await $.ajax({
            url: 'http://localhost:4000/user/create-user',
            type: 'POST',
            data: {
                username: username,
                age: age,
                password: password
            }
        })
        $('#error-text').html(res.mess)
    } catch (error) {
        console.log(500, error)
    }
}
function resetValue() {
    username = $('#username').val('');
    age = $('#age').val('');
    password = $('#password').val('');
    $('#error-text').html('');
}
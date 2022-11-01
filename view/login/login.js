async function login () {
    const username = $('#username').val();
    const password = $('#password').val();
     try {
        const data = await $.ajax({
            url: '/user/login',
            type: 'POST',
            data: {username, password}
        })
        window.location.href = '/product'
     } catch (error) {
        $('#loginText').html(error.responseJSON.mess)
     }

}

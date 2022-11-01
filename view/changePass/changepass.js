async function update() {
    const username = $('#username').val();
    const password = $('#password').val();
    const newPassword = $('#newPassword').val();
    const comfirmPassword = $('#comfirmPassword').val();
    if (newPassword === comfirmPassword) {
        try {
            const res = await $.ajax({
                url: 'http://localhost:4000/user/change-password',
                type: 'POST',
                data: {
                    username: username,
                    password: password,
                    newPassword: newPassword
                }
            })
            $('#error-text').html(res.mess)
        } catch (error) {
            $('#error-text').html(res.mess)
        }
    } else {
        $('#error-text').html('new password khac comfirm password')
    }
}

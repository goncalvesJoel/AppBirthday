document.querySelector(function () {

    if (!document.querySelector('.envelope').classList.contains('open')) {
        document.querySelector('.envelope').click(function () {
            document.querySelector(this).classList.remove('new').classList.add('open');
        });
    }

});


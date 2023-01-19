document.querySelector(function () {

    if (!document.on('.envelope').classList.contains('open')) {
        document.on('.envelope').click(function () {
            document.on(this).classList.remove('new').classList.add('open');
        });
    }

});


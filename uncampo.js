(function(){
    $('#ejemplo').change(function(){

        let monto1 = $('#ejemplo').value();
        let peso = $('#currency').value();
        monto2 = monto1 +20000;
        $('#amount_static').text(peso + monto1);
        $('#amount').value(monto1);
        $('#amount').prop('type','hidden');
    });
})();
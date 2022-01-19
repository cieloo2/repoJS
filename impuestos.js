// impuesto 1
(function(){
    $('#Cargotrans').change(function(){

        let monto1 = parseFloat($('#Montotrans').value());
        let monto2 = parseFloat($('#Cargotrans').value());
        let cuatroxmil = 0;
        let iva = 0;
        let total = 0;

        cuatroxmil=(monto1*0.004);
        iva=(monto2*0.19);
        total = monto1+cuatroxmil+monto2+iva;
        total1 = total.toFixed(2);

        $('#Cuatroxmil_static').text('COP $' +cuatroxmil);
        $('#Cuatroxmil').value(cuatroxmil);
        $('#Cuatroxmil').prop('type','hidden');

        
        $('#IVA_static').text('COP $' +iva);
        $('#IVA').value(iva);
        $('#IVA').prop('type','hidden');

        amount
        $('#amount_static').text('COP $' +total1);
        $('#amount').value(total1);
        $('#amount').prop('type','hidden');



    });

})();

// impuesto 2
(function(){
    $('#Montotrans').change(function(){

        let monto1 = parseFloat($('#Montotrans').value());
        let monto2 = parseFloat($('#Cargotrans').value());
        let cuatroxmil = 0;
        let iva = 0;
        let total = 0;

        cuatroxmil=(monto1*0.004);
        iva=(monto2*0.19);
        total = monto1+cuatroxmil+monto2+iva;
        total1 = total.toFixed(2);

        $('#Cuatroxmil_static').text('COP $' +cuatroxmil);
        $('#Cuatroxmil').value(cuatroxmil);
        $('#Cuatroxmil').prop('type','hidden');

        
        $('#IVA_static').text('COP $' +iva);
        $('#IVA').value(iva);
        $('#IVA').prop('type','hidden');

        amount
        $('#amount_static').text('COP $' +total1);
        $('#amount').value(total1);
        $('#amount').prop('type','hidden');



    });

})();
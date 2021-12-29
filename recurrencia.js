(function(){
    //Asignacion de variable a los campos
    let per = $('#periodo');


    // funcion añadir dias a date()

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
        };
    
    var date = new Date();
    
    // Fecha final de la recurrencia
    
    //Seis meses
    var diario = date.addDays(180);
    var final1 = diario.getFullYear() + "-" + (diario.getMonth()+1) + "-" + diario.getDate();
    
    //Cuatro años
    var semanal = date.addDays(1440);
    var final2 = semanal.getFullYear() + "-" + (semanal.getMonth()+1) + "-" + semanal.getDate();

    //Cinco años
    var cincoa = date.addDays(1800);
    var final3 = cincoa.getFullYear() + "-" + (cincoa.getMonth()+1) + "-" + cincoa.getDate();

    // Siguiente pago de la recurrencia
    
    //Diario
    var date1 = date.addDays(1);
    var date2 = date1.getFullYear() + "-" + (date1.getMonth()+1) + "-" + date1.getDate();
    //Semanal
    var date3 = date.addDays(7);
    var date4 = date3.getFullYear() + "-" + (date3.getMonth()+1) + "-" + date3.getDate();
    //Quincenal
    var date5 = date.addDays(15);
    var date6 = date5.getFullYear() + "-" + (date5.getMonth()+1) + "-" + date5.getDate();
    //Mensual
    var date7 = date.addDays(30);
    var date8 = date7.getFullYear() + "-" + (date7.getMonth()+1) + "-" + date7.getDate();
    //Anual
    var date9 = date.addDays(360);
    var date10 = date9.getFullYear() + "-" + (date9.getMonth()+1) + "-" + date9.getDate();
    

    per.change(function(){
       if(per.value() === '1'){
            $('#recurrent_periodicity').value('D');
            $('#recurrent_interval').value('1');
            $('#recurrent_max_periods').value('180');
            $('#recurrent_date').show();
            $('#recurrent_next_payment').show();
            $('label[for="recurrent_date"]').show();
            $('label[for="recurrent_next_payment"]').show();
        }else if(per.value() === '2'){
            $('#recurrent_periodicity').value('D');
            $('#recurrent_interval').value('7');
            $('#recurrent_max_periods').value('208');
            $('#recurrent_date').show();
            $('#recurrent_next_payment').show();
            $('label[for="recurrent_date"]').show();
            $('label[for="recurrent_next_payment"]').show();
        }else if(per.value() === '3'){
            $('#recurrent_periodicity').value('D');
            $('#recurrent_interval').value('15');
            $('#recurrent_max_periods').value('120');
            $('#recurrent_date').show();
            $('#recurrent_next_payment').show();
            $('label[for="recurrent_date"]').show();
            $('label[for="recurrent_next_payment"]').show();
        }else if(per.value() === '4'){
            $('#recurrent_periodicity').value('M');
            $('#recurrent_interval').value('1');
            $('#recurrent_max_periods').value('60');
            $('#recurrent_date').show();
            $('#recurrent_next_payment').show();
            $('label[for="recurrent_date"]').show();
            $('label[for="recurrent_next_payment"]').show();
        }else if(per.value() === '5'){
            $('#recurrent_periodicity').value('A');
            $('#recurrent_interval').value('1');
            $('#recurrent_max_periods').value('5');
            $('#recurrent_date').show();
            $('#recurrent_next_payment').show();
            $('label[for="recurrent_date"]').show();
            $('label[for="recurrent_next_payment"]').show();
        }
    });
})();
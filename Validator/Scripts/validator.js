// constructor: validate

(function ($) {

    $.fn.validate = function (options) {

        var rules = $.extend({
            isIncorrect: function () { },
            isNumber: false,
            isNotNumber: false,
            ViewMsgSuccess: function(sMsg){
                this.ViewAlert(sMsg);
            },
            ViewMsgFailure: function(sMsg){
                this.ViewAlert(sMsg);
            },
        }, options);

        var Alert = {
            ViewAlert: function(sMsg){
                var elAlertDanger = 
                $("<div class='alert alert-danger alert-dismissible fade in alert-message' role='alert' style='position:absolute; z-index:1;'>\
                    <button class='close' aria-label='Close' type='button' data-dismiss='alert'><span aria-hidden='true'>X</span></button>\
                        <strong>"+ sMsg + "</strong>\
                </div>");
                $("#divAlert").html(elAlertDanger).alert();
                setTimeout(function () {
                    $("#divAlert").alert('close');
                }, 4000);
            }
        }

        return this.each(function () {
            if(rules.isIncorrect($(this))){
                rules.ViewMsgFailure.call(Alert,"Invalid");
            }
        });
    };

    
    $("#btnValidateEmptiness").click(function(){
        $("#txtEmptiness").validate({
            isIncorrect: function(el){
                return el.val()=="";
            }
        });
    });
})(jQuery);
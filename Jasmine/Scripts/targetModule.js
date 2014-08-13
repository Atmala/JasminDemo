var TM = (function () {
    var Target = function() {};

    Target.prototype = {
        doTestableAction: function(domId) {
            $('#' + domId).val('verifyText');
        }
    };

    return Target;
}());
describe("Target module", function () {
    var module = new TM();

    it("can setup text to given control", function () {
        module.doTestableAction('inpTarget');
        var value = $("#inpTarget").val();
        expect(value === 'verifyText').toBe(true);
    });

});
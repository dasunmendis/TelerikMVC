$(document).ready(function () {
    ComboBoxStatic.PopulateComboBoxSatatic();
    ComboBoxDynamic.PopulateComboBoxDynamic();
});

var ComboBoxStatic = {
    PopulateComboBoxSatatic: function () {
        $("#cmbEmployeeStatic").kendoComboBox({
            dataTextField: "Name",
            dataValueField: "Id",
            dataSource: [
                { Name: "Dasun", Id: 1 },
                { Name: "Gayan", Id: 2 }
            ]
        });
    }
}

var ComboBoxDynamic = {
    GetEmployeeData: function () {
        var obj = "";
        var params = "";
        var url = "../Demo/GetEmployeeData/";
        ComboBoxDynamic.JsonResult(url, params, false, false, onSuccess, onFailure)

        function onSuccess(jsonData) {
            obj = jsonData;
        }
        function onFailure(jqXHR, textStatus, errorThrown) {
            window.alert(errorThrown);
        }

        return obj;
    },

    PopulateComboBoxDynamic: function () {
        $("#cmbEmployeeDynamic1").kendoComboBox({
            dataTextField: "Name",
            dataValueField: "Id",
            dataSource: ComboBoxDynamic.GetEmployeeData()
        });
    },

    //Get Server Data using Ajax
    JsonResult: function (url, params, isAsync, isCache, successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            async: isAsync,
            cache: isCache,
            url: url,
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            sucess: successCallback,
            error: errorCallback
        });
    }
}

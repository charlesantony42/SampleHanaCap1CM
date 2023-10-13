sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vimbasicapp.controller.ItemView", {
            editEnabled : false,
            onInit: function () {
                var oRouter, oTarget;
                var that = this;
                oRouter = this.getOwnerComponent().getRouter();
                oTarget = oRouter.getTarget("TargetItemView");
                oTarget.attachDisplay(function (oEvent) {
                    that.initializeView(oEvent);
                }, this);
            },

            initializeView : function() {
                // FormChange480_12120
                // this.getView().byId("FormChange480_12120").bindElement({
                //     path: "/Invoice_Header/$1235)"
                // });
                //bindObject("/Invoice_Header('1235')");
                //
                //bindElement({
                var filters = [];
                var invoiceId = this.getOwnerComponent().getModel("uiModel").getProperty("/InvoiceId");
                // filters.push(new sap.ui.model.Filter( "INTHeader_ID", sap.ui.model.FilterOperator.EQ, "1235"));
                filters.push(new sap.ui.model.Filter( "INTHeader_ID", sap.ui.model.FilterOperator.EQ, invoiceId));                
                var oTable = this.getView().byId("itemTable");
                oTable.bindRows({
                    path: "/Invoice_Items",
                    filters: filters
                });
                //uiModel>/ViewType
                //this.getView().byId("compCode").bindProperty("value", "/Invoice_Header('1235')/CompanyCode");
                this.getView().byId("compCode").bindProperty("value", "uiModel>/ViewType");
            },

            handleEditPress : function(){
                this.getView().byId("saveButtonVIM").setVisible(true);
                this.getView().byId("cancelButtonVIM").setVisible(true);
                this.getView().byId("editButtonVIM").setVisible(false);
            },

            handleSavePress : function() {
                this.getOwnerComponent().getModel().submitBatch();
                this.getView().byId("saveButtonVIM").setVisible(false);
                this.getView().byId("cancelButtonVIM").setVisible(false);
                this.getView().byId("editButtonVIM").setVisible(true);
                sap.m.MessageToast.show("Invoice data saved");
            },

            handleCancelPress : function() {
                this.getView().byId("saveButtonVIM").setVisible(false);
                this.getView().byId("cancelButtonVIM").setVisible(false);
                this.getView().byId("editButtonVIM").setVisible(true);
            }
        });
    });
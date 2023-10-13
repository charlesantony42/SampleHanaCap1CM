sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vimbasicapp.controller.HeaderView", {
            onInit: function () {
                this.getView().setModel(this.getUiModel(), "uiModel");
                var oRouter, oTarget;
                var that = this;
                oRouter = this.getOwnerComponent().getRouter();
                oTarget = oRouter.getTarget("TargetHeaderView");
                oTarget.attachDisplay(function (oEvent) {
                    that.initializeView(oEvent);
                }, this);
            },

            initializeView : function() {
                var oList = this.getView().byId("invoiceList");
                var approvalStatus = this.getOwnerComponent().getModel("uiModel").getProperty("/ApprovalStatus");
                oList.getBinding("items").filter(new sap.ui.model.Filter("ApprovalStatus", sap.ui.model.FilterOperator.EQ, approvalStatus));
            },

            onListItemPress : function(oEvent) {
                this.getOwnerComponent().getModel("uiModel").setProperty("/InvoiceId",
                oEvent.getSource().getBindingContextPath().split("(")[1].split(")")[0]);
                this.getOwnerComponent().getRouter().navTo("RouteItemView");
            },

            getUiModel : function() {
                return this.getOwnerComponent().getModel("uiModel");
            }
        });
    });

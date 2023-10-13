sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vimbasicapp.controller.LandingPage", {
            onInit: function () {
                this.getOwnerComponent().getModel("uiModel").setProperty("/InitialData", "");
                this.getView().setModel(this.getUiModel(), "uiModel");
            },

            showInReview : function() {
                this.getView().getModel("uiModel").setProperty("/ViewType", "Invoices for Review");
                this.getView().getModel("uiModel").setProperty("/ApprovalStatus", "In Review");
                // this.getUiModel().setProperty("/ViewType", "In Review");
                this.getOwnerComponent().getRouter().navTo("RouteHeaderView");
            },

            showPendingApproval : function() {
                this.getView().getModel("uiModel").setProperty("/ViewType", "Invoices Pending Approval");   
                this.getView().getModel("uiModel").setProperty("/ApprovalStatus", "Pending Approval");             
                // this.getUiModel().setProperty("/ViewType", "Pending Approval");
                // this.getView().getModel("uiModel").setProperty("/ViewType", "Pending Approval");
                this.getOwnerComponent().getRouter().navTo("RouteHeaderView");
            },

            onListItemPress : function() {
                this.getOwnerComponent().getRouter().navTo("RouteItemView");
            },

            getUiModel : function() {
                return this.getOwnerComponent().getModel("uiModel");
            }
        });
    });

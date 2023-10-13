sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'vimproject',
            componentId: 'Invoice_HeaderList',
            entitySet: 'Invoice_Header'
        },
        CustomPageDefinitions
    );
});
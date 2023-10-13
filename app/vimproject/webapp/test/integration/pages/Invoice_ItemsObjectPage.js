sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vimproject',
            componentId: 'Invoice_ItemsObjectPage',
            entitySet: 'Invoice_Items'
        },
        CustomPageDefinitions
    );
});
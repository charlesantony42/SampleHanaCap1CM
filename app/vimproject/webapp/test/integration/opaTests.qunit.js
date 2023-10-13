sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vimproject/test/integration/FirstJourney',
		'vimproject/test/integration/pages/Invoice_HeaderList',
		'vimproject/test/integration/pages/Invoice_HeaderObjectPage',
		'vimproject/test/integration/pages/Invoice_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Invoice_HeaderList, Invoice_HeaderObjectPage, Invoice_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vimproject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInvoice_HeaderList: Invoice_HeaderList,
					onTheInvoice_HeaderObjectPage: Invoice_HeaderObjectPage,
					onTheInvoice_ItemsObjectPage: Invoice_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
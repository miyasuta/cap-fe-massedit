sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'miyasuta/listreport/test/integration/FirstJourney',
		'miyasuta/listreport/test/integration/pages/BooksList',
		'miyasuta/listreport/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('miyasuta/listreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
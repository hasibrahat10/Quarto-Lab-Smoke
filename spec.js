// let featureAccess = require('./ClickFeatures');
// let pricingAccess = require('./Pricing');
// let industriesClickAccess = require('./Industries')
// let requestDemoAccess = require('./RequestDemo');
// let loginLogoutAccess = require('./LoginLogout');
// let forgotPasswordAccess = require('./ForgotPassword');
let loginAccess = require('./UserLogin');
//let simpleDocumentAccess = require('./SimpleDocument.js');
//let multiSectionalDocumentAccess = require('./MultiSectionalDocument.js'); 
//let VisualDocumentAccess = require('./VisualDocument.js');
//let createorUploadVideoAccess = require('./CreateorUploadVideo.js');
// //  let userAssignAccess = require('./assigntoCreate'); 
//  let shareURLAccess = require('./Share.js');
//  let globalsharehAccess = require('./GlobalSearch');
//  let exploreCategoriesAccess = require('./ExploreCategories');
//  let myDashboardAccess = require('./MyDashboard');
//  let companySettingsAccess = require('./CompanySettings');
//  let categoryManagerAccess = require('./CategoryManager.js');
// let fileManagerAccess = require('./FileManager.js');
// let forumAccess = require('./Forum.js');
// let anlyticsAccess = require('./Analytics.js');
// let profileMyAccountAccess = require('./MyAccount.js');
// let profileHistoryAccess = require('./History.js')
// let profileReadingLogAccess = require('./ReadingLog');
// let profileHelpAccess = require('./Help.js');
// let logOutAccess = require('./LogOut.js');


describe('Quarto Lab', function () {
    //////////// Web-Setup ////////////////
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000000;
    });
    afterEach(function () {
        // browser.executeScript('window.sessionStorage.clear();');
        // browser.executeScript('window.localStorage.clear();');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('Quarto Website', function () {
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = true; 
        //#Domain
        //browser.get('http://qartolab.com/');
        browser.get('https://quartolab.com');
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();
        expect(browser.getTitle()).toEqual('Quarto');
        
    });

    //////////// Test-Suite ////////////////

    //Website
    //featureAccess.featureClick();
    // pricingAccess.pricingClick();
    // requestDemoAccess.requestDemo();
    // loginLogoutAccess.loginLogout();
    // forgotPasswordAccess.forgotPassword();

    //Login

    loginAccess.login();

    //#Simple Document
    //simpleDocumentAccess.publish();
    // simpleDocumentAccess.imgPublish();
    // simpleDocumentAccess.docPublish();
    // simpleDocumentAccess.searchfilefromallcategoriesPublish();
    // simpleDocumentAccess.simpleDocumentPreview();
    // simpleDocumentAccess.simpleDocumentDraft();
    // simpleDocumentAccess.simpleDocumentReset();
    //simpleDocumentAccess.addQuiz();

    //#Multi-Sectional Document
    //multiSectionalDocumentAccess.multiSectionalDocumentPublish();
    //multiSectionalDocumentAccess.multiDocaddQuiz();
    
    
    //#Visual Document
    //VisualDocumentAccess.visualDocument();
    //VisualDocumentAccess.visualDocAddQuiz();

    //#Create or Upload Video 
    // createorUploadVideoAccess.createorUploadVideo();
    // createorUploadVideoAccess.createOrUploadLocalVideoAddQuiz();
    // createorUploadVideoAccess.createOrUploadEmbedVideoAddQuiz();

    //#ASSIGN TO CREATE
    //userAssignAccess.assignusertoCreate();
    //ShareURL
    //shareURLAccess.shareURL();
    //Global Search
    //globalsharehAccess.globalSearch();
    //Explore Categories 
    // exploreCategoriesAccess.exploreCategories();
    //My Dashboard
    //myDashboardAccess.myDashboard();
    // //Company Settings
    //companySettingsAccess.compaySettings();
    // //Category Manager
    //categoryManagerAccess.categoryManager();
    // //File Manager
    //     fileManagerAccess.fileManager();
    // //Forum
    //     forumAccess.forum();
    // //Analytics
    //     anlyticsAccess.analytics();
    // //My Account
    //     profileMyAccountAccess.profileMyAccount();
    // //History
    //     profileHistoryAccess.profileHistory();
    // //Reading Log
    //     profileReadingLogAccess.profileReadingLog();
    // //HELP
    //     profileHelpAccess.profileHelp();
    // //LogOut
    //     logOutAccess.logOut();



});









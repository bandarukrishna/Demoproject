$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "mercurytours Feature",
  "description": "",
  "id": "mercurytours-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Registeration Test Scenario",
  "description": "",
  "id": "mercurytours-feature;registeration-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on registerlink",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters contact information \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cphone\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters mailing address information \"\u003caddress1\u003e\" and \"\u003caddress2\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003cpostalcode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters user information \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "mercurytours-feature;registeration-test-scenario;",
  "rows": [
    {
      "comments": [
        {
          "line": 12,
          "value": "# @source:C:/Users/krishna/eclipse-workspace1/Cucumber/src/main/java/com/crm/qa/testdata/FreeCrmTestData.xlsx/Sheet1"
        }
      ],
      "cells": [
        "firstname",
        "lastname",
        "phone",
        "email",
        "address1",
        "address2",
        "city",
        "state",
        "postalcode",
        "username",
        "password",
        "confirmpassword"
      ],
      "line": 13,
      "id": "mercurytours-feature;registeration-test-scenario;;1"
    },
    {
      "cells": [
        "krishna",
        "bandaru",
        "9874564123",
        "kri124@gmail.com",
        "3-49",
        "GKPPlots",
        "HYD",
        "TS",
        "87541",
        "Test123",
        "test@123",
        "test@123"
      ],
      "line": 14,
      "id": "mercurytours-feature;registeration-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Registeration Test Scenario",
  "description": "",
  "id": "mercurytours-feature;registeration-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on registerlink",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters contact information \"krishna\" and \"bandaru\" and \"9874564123\" and \"kri124@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters mailing address information \"3-49\" and \"GKPPlots\" and \"HYD\" and \"TS\" and \"87541\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters user information \"Test123\" and \"test@123\" and \"test@123\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageTest.user_is_already_on_landing_Page()"
});
formatter.result({
  "duration": 27120140300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.user_clicks_on_registerlink()"
});
formatter.result({
  "duration": 1838885800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krishna",
      "offset": 33
    },
    {
      "val": "bandaru",
      "offset": 47
    },
    {
      "val": "9874564123",
      "offset": 61
    },
    {
      "val": "kri124@gmail.com",
      "offset": 78
    }
  ],
  "location": "RegisterPageTest.user_enters_contact_information_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 653882500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3-49",
      "offset": 41
    },
    {
      "val": "GKPPlots",
      "offset": 52
    },
    {
      "val": "HYD",
      "offset": 67
    },
    {
      "val": "TS",
      "offset": 77
    },
    {
      "val": "87541",
      "offset": 86
    }
  ],
  "location": "RegisterPageTest.user_enters_mailing_address_information_and_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 399318100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 30
    },
    {
      "val": "test@123",
      "offset": 44
    },
    {
      "val": "test@123",
      "offset": 59
    }
  ],
  "location": "RegisterPageTest.user_enters_user_information_and_and(String,String,String)"
});
formatter.result({
  "duration": 5768426600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.user_closes_the_browser()"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.after({
  "duration": 7334991600,
  "status": "passed"
});
});
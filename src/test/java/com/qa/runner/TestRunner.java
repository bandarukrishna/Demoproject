package com.qa.runner;

import java.io.File;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.qa.base.TestBase;
import com.vimalselvam.cucumber.listener.ExtentProperties;
import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
@CucumberOptions(
        features = {"classpath:Features"},
      glue = {"stepDefinitions"},
        monochrome=true,
       // tags = {"~@Ignore"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        },
        plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/reports/Extent-Report_Runner.html"}

		)
//@Listeners(extentlisteners.ExtentListeners.class)
//@Listeners(com.qa.ExtentReportListener.ExtentReporterNG.class)
public class TestRunner {
    private TestNGCucumberRunner testNGCucumberRunner;
 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
    	//Cucumber_ExtentReportListener.setUp();
   ExtentProperties extentProperties = ExtentProperties.INSTANCE;
   extentProperties.setReportPath("output/myreport.html");
    	
    	
    	testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    	
    }
    
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
    	Reporter.loadXMLConfig(new File(TestBase.getReportConfigPath()));
    //	Reporter.addScreenCaptureFromPath(System.getProperty("user.dir")+"/Screenshots"+System.currentTimeMillis());
    	
    	Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
        Reporter.setSystemInfo("Selenium", "3.7.0");
        Reporter.setSystemInfo("Maven", "3.5.2");
        Reporter.setSystemInfo("Java Version", "1.8.0_151");
        
        testNGCucumberRunner.finish();
    }
}
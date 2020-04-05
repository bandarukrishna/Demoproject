package stepDefinitions;

import com.qa.base.TestBase;

import cucumber.api.java.en.Given;

public class LandingPageTest extends TestBase{
	@Given("^user is already on landing Page$")
	public void user_is_already_on_landing_Page() throws Throwable {
		initialization();
		System.out.println("landed on landing page");
	}
	

}

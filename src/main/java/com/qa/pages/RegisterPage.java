package com.qa.pages;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.base.TestBase;

public class RegisterPage extends TestBase{

@FindBy(xpath="//*[@name='firstName']")
WebElement firstName;

@FindBy(xpath="//*[@name='lastName']")
WebElement lastName;

@FindBy(xpath="//*[@name='phone']")
WebElement phonenum;

@FindBy(xpath="//*[@name='userName']")
WebElement mailid;
@FindBy(xpath="//*[@name='address1']")
WebElement address1;

@FindBy(xpath="//*[@name='address2']")
WebElement address2;

@FindBy(xpath="//*[@name='city']")
WebElement city;

@FindBy(xpath="//*[@name='state']")
WebElement state;
@FindBy(xpath="//*[@name='postalCode']")
WebElement postalCode;

@FindBy(xpath="//*[@name='email']")
WebElement username;
@FindBy(xpath="//*[@name='password']")
WebElement password;

@FindBy(xpath="//*[@name='confirmPassword']")
WebElement confirmPassword;

@FindBy(xpath="//*[@name='submit']")
WebElement submit;

public RegisterPage()
{
PageFactory.initElements(driver, this);	
}

public void enterContactInformation(String firstname, String lastname, String phone, String mail)
{
firstName.sendKeys(firstname);	
lastName.sendKeys(lastname);
phonenum.sendKeys(phone);
mailid.sendKeys(mail);
}
public void enterMailingInformation(String address_1, String City, String State, String PostalCode )
{	
address1.sendKeys(address_1);
//address2.sendKeys(address_2);
city.sendKeys(City);
state.sendKeys(State);
postalCode.sendKeys(PostalCode);
}

public void entersUserInformation(String Username, String Password, String ConfirmPassword)
{
	username.sendKeys(Username);
	password.sendKeys(Password);
	confirmPassword.sendKeys(ConfirmPassword);
	submit.click();
	
}
}

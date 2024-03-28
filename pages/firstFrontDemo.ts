import { expect, type Locator, type Page } from "@playwright/test";
import { link } from "fs";

export class firstFrontDemo {
  readonly page: Page;
  readonly menuLink: Locator;
  readonly productLink: Locator;
  readonly addToCartBtn: Locator;
  readonly shoppingCartLink: Locator;
  readonly productCartLink: Locator;
  readonly proceedToCheckout: Locator;
  readonly minAmountMsg: Locator;
  readonly editIcon: Locator;
  readonly editQty: Locator;
  readonly updateCart: Locator;
  readonly updateMsg: Locator;
  readonly email: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly streetAddress: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zip: Locator;
  readonly phoneNumber: Locator;
  readonly nextButton: Locator;
  readonly paymentMethod: Locator;
  readonly placeOrder: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuLink = page.locator(
      '//span[normalize-space()="Cardsave Payments"]'
    );
    this.productLink = page.locator(
      '//div[@id="product-item-info_2"]//a[@class="product-item-link"]'
    );
    this.addToCartBtn = page.locator('//span[normalize-space()="Add to Cart"]');
    this.shoppingCartLink = page.locator(
      "//a[normalize-space()='shopping cart']"
    );
    this.productCartLink = page.getByRole("link", { name: "Men's Jeans" });
    this.proceedToCheckout = page.locator(
      '//span[normalize-space()="Proceed to Checkout"]'
    );
    this.minAmountMsg = page.locator(
      '//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]'
    );
    this.editIcon = page.locator('//a[@title="Edit item parameters"]');
    this.editQty = page.locator('//input[@id="qty"]');
    this.updateMsg = page.locator(
      '//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]'
    );
    this.email = page.locator('//input[@id="customer-email"]');
    this.firstName = page.locator('//input[@id="INJ9ELH"]');
    this.lastName = page.locator('//input[@id="I1FBYQK"]');
    this.company = page.locator('//input[@id="F4VRY3F"]');
    this.streetAddress = page.locator('//input[@id="R6NFWPW"]');
    this.country = page.locator('//select[@id="X8JY56J"]');
    this.state = page.locator('//select[@id="R94N45H"]');
    this.city = page.locator('//input[@id="L1WT3D6"]');
    this.zip = page.locator('//input[@id="NFL6TSN"]');
    this.phoneNumber = page.locator('//input[@id="NFL6TSN"]');
    this.nextButton = page.locator('//input[@id="NFL6TSN"]');
    this.paymentMethod = page.locator('//input[@id="cashondelivery"]');
    this.placeOrder = page.locator(
      '//div[@class="payment-method _active"]//span[contains(text(),"Place Order")]'
    );
  }
  async addToCartAction(){
    
  }
}

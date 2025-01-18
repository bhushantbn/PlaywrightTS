import { test, expect } from "@playwright/test";
import { request } from "http";

test("GraphQL API Status check", async ({ request }) => {
  const response = await request.post("https://countries.trevorblades.com/", {
    data: {
      query: `{
  countries(filter: {code: {eq: "IN"}}) {
    code
    capital
    currency
    languages {
      name
    }
    states{
        code
        name
    }
  }
}`,
    },
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
});
test("GraphQL API data length", async ({ request }) => {
  const response = await request.post("https://countries.trevorblades.com/", {
    data: {
      query: `{
    countries(filter: {code: {eq: "IN"}}) {
      code
      capital
      currency
      languages {
        name
      }
      states{
          code
          name
      }
    }
  }`,
    },
  });
  const responseBody = await response.json();
  expect(responseBody.data.countries.length).toBe(1);
});
test("GraphQL API COuntries length", async ({ request }) => {
  const response = await request.post("https://countries.trevorblades.com/", {
    data: {
      query: `{
    countries() {
        name
    }  
  }`,
    },
  });
  const responseBody = await response.json();
  expect(responseBody.data.countries.length).toBe(250);
  const countryNames = responseBody.data.countries.map(
    (country: { name: String }) => country.name
  );

  expect(countryNames).toContain("India");
});

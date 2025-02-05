import {
  test,
  expect,
  request as playwrightRequest,
  APIRequestContext,
} from "@playwright/test";
import { error } from "console";

const url = process.env.APIURL || "https://api.example.com"; // Ensure a fallback URL
const token = process.env.TOKEN;
const repo = process.env.REPO;
const owner = process.env.OWNER;

let request: APIRequestContext; // Declare a global request variable

test.beforeAll(async () => {
  // Initialize the request object
  request = await playwrightRequest.newContext({
    baseURL: url, // Set the base URL for all requests
    extraHTTPHeaders: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });
});

test.afterAll(async () => {
  // Clean up the request object after all tests are done
  await request.dispose();
});

test.describe("GitHub Repository API Tests", () => {
  test("Get all repositories", async () => {
    const response = await request.get(`/user/repos`);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    const repos = await response.json();
    expect(Array.isArray(repos)).toBeTruthy();
    console.log(`Number of repositories: ${repos.length}`);
    expect(repos.length).toBeGreaterThan(1);
    console.log(repos.map((r: { name: string }) => r.name));
  });
  test("Get a specific repository", async () => {
    const response = await request.get(`/repos/${owner}/${repo}`);
    const repoData = await response.json();
    expect(repoData.name).toBe(repo);
    console.log(`Repository: ${repoData.name}`);
  });
  test("Get all branches", async () => {
    const response = await request.get(`/repos/${owner}/${repo}/branches`);
    const branches = await response.json();
    expect(Array.isArray(branches)).toBeTruthy();
    console.log(`Number of branches: ${branches.length}`);
    expect(branches.length).toBeGreaterThan(1);
    console.log(branches.map((b: { name: string }) => b.name));
  });

  test("Create New repository", async () => {
    const response = await request.post(`/user/repos`, {
      data: {
        name: "private_repo24",
        description: "This is your private_repo24",
        homepage: "https://github.com",
        private: true,
        has_issues: true,
        has_projects: true,
        has_wiki: true,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response.status()).toBe(201);
    if (response.status() !== 201) {
      console.error(`Request failed with status ${response.status()}`);
      const errorBody = await response.text();
      console.error(`Error response body: ${errorBody}`);
    }
  });
  test("Update repository", async () => {
    const response = await request.patch(`/repos/${owner}/${repo}`, {
      data: {
        name: "Hello-World1234",
        description: "This is your updated repository",
        homepage: "https://github.com",
        private: true,
        has_issues: true,
        has_projects: true,
        has_wiki: true,
      },
    });
    const updateRepo = await response.json();
    expect(updateRepo).toHaveProperty(
      "description",
      "This is your updated repository"
    );
    console.log(updateRepo.description);
    expect(response.status()).toBe(200);
    if (response.status() !== 200) {
      console.error(`Request failed with status ${response.status()}`);
      const errorBody = await response.text();
      console.error(`Error response body: ${errorBody}`);
    }
  });
  test("delete repository", async () => {
    const response = await request.delete(`/repos/${owner}/${repo}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response.status()).toBe(204);
    if (response.status() !== 204) {
      console.error(`Request failed with status ${response.status()}`);
      const errorBody = await response.text();
      console.error(`Error response body: ${errorBody}`);
    }
  });
  test("create issues", async () => {
    const response = await request.post(`/repos/${owner}/${repo}/issues`, {
      data: {
        title: "Found a bug199",
        body: "I'm having a problem with this. update repository issue",
        labels: ["bug"],
      },
    });
    expect(response.status()).toBe(201);
    if (response.status() !== 201) {
      console.error(`Request failed with status ${response.status()}`);
      const errorBody = await response.text();
      console.error(`Error response body: ${errorBody}`);
    }
  });
});

# Playlist App UI Tests

This project contains automated UI tests for the Playlist App using **Playwright** and **TypeScript**.

## Setup Instructions

1. Clone this repository:
   ```git clone https://github.com/GregoryBRL/AQA-Engineer-test-assessment---Playlist-App.git```
   ```cd playlist-tests```

2. Install dependencies:
   ```npm install```

3. Install Playwright browsers:
   ```npx playwright install```

4. (Optional) Configure environment variables in `.env`:
   ```BASE_URL=https://vite-react-alpha-lemon.vercel.app/```

## Running Tests

Run all tests in headless mode:
```npx playwright test```

Run tests with UI (debug mode):
```npx playwright test --ui```

## Project Structure
```
playlist-tests/
├── tests/
│   └── playlist.spec.ts
├── utils/
│   └── helpers.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── .env
└── README.md
```
## Test Coverage

The following functional UI tests are implemented:
1. **Search Functionality** – verifies that typing in the search box filters tracks correctly.
2. **Add Track Using "+" Button** – ensures clicking the "+" button adds a track to the playlist.
3. **Verify Total Duration** – checks that the total duration of the playlist is calculated correctly in seconds.

## Notes

- Framework: Playwright + TypeScript
- Tests are located in the `tests/` folder
- Helper functions are in `utils/`

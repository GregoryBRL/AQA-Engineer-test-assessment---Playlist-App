import { test, expect } from '@playwright/test';
import { parseDurationToSeconds } from '../utils/helpers';

test('search filters tracks correctly', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[id=":r0:"]', 'Summer');
  const tracks = await page.locator('.track').allTextContents();
  expect(tracks.every(t => t.toLowerCase().includes('Summer'))).toBeTruthy();
});

test('add track to playlist using + button', async ({ page }) => {
  await page.goto('/');
  const firstTrackRow = page.locator('div.MuiGrid-container').first();
  const trackName = await firstTrackRow.locator('p').nth(0).textContent();
  await firstTrackRow.locator('button:has-text("+")').click();
  const playlistTracks = await page.locator('#playlist p').allTextContents();
  expect(playlistTracks).toContain(trackName?.trim());
});

test('playlist total duration is correct', async ({ page }) => {
  await page.goto('/');
  const firstTrackRow = page.locator('div.MuiGrid-container').first();
  const durationText = await firstTrackRow.locator('p').nth(1).textContent();
  await firstTrackRow.locator('button:has-text("+")').click();
  console.log('Duration text:', durationText);
  const expectedSeconds = parseDurationToSeconds(durationText!.trim());
  const displayedTotal = await page.locator('#playlist-duration').textContent();
  expect(Number(displayedTotal)).toBe(expectedSeconds);
});
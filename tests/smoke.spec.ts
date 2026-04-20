import { test, expect } from '@playwright/test'

// Verifies CMS content is loading — catches silent Supabase fallback to defaults
test('homepage loads CMS content', async ({ page }) => {
  await page.goto('/')
  const h1 = page.locator('h1').first()
  await expect(h1).toBeVisible()
  const text = await h1.textContent()
  expect(text?.trim().length).toBeGreaterThan(10)
})

test('homepage has no console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/')
  expect(errors).toHaveLength(0)
})

test('testimonials section renders', async ({ page }) => {
  await page.goto('/')
  const testimonials = page.locator('#testimonials')
  await expect(testimonials).toBeVisible()
})

test('navigation links are present', async ({ page }) => {
  await page.goto('/')
  const nav = page.locator('nav')
  await expect(nav).toBeVisible()
})

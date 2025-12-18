# Netlify Forms Migration for @netlify/plugin-nextjs@5

## Problem
Netlify deployment was failing with error:
```
Plugin "@netlify/plugin-nextjs" failed
Error: Failed assembling prerendered content for upload
@netlify/plugin-nextjs@5 requires migration steps to support Netlify Forms
```

## Solution Implemented

### 1. Created Static Form Detection File
**File:** `public/__forms.html`

This file contains a hidden HTML form that Netlify uses to detect form fields during build time. It includes all fields from the pricing calculator form.

### 2. Created API Route for Form Submission
**File:** `src/app/api/submit-form/route.ts`

This API route handles form submissions and forwards them to Netlify Forms. It uses the edge runtime for better performance.

**Key features:**
- Converts FormData to URLSearchParams
- Forwards to Netlify's `__forms.html` endpoint
- Returns JSON response for success/error handling

### 3. Updated PriceCalculator Component
**File:** `src/components/PriceCalculator.tsx`

**Changes made:**
- Removed inline hidden form (no longer needed with static HTML approach)
- Changed form submission to use `/api/submit-form` endpoint
- Updated to send FormData instead of URLSearchParams
- Improved error handling

### 4. Simplified netlify.toml
**File:** `netlify.toml`

Removed the `[forms]` section as it's not needed with the new approach. Netlify automatically detects forms from the static HTML file.

## How It Works

1. **Build Time:** Netlify scans `public/__forms.html` and registers the form
2. **Runtime:** User fills out pricing calculator
3. **Submission:** Form data is sent to `/api/submit-form` API route
4. **Processing:** API route forwards to Netlify Forms
5. **Notification:** Netlify sends form submission notifications

## Testing

To test locally:
```bash
npm run build
npm start
```

Then visit http://localhost:3000/offert and submit the pricing calculator form.

## Form Notifications

Configure form notifications in Netlify Dashboard:
1. Go to Site Settings → Forms
2. Click on "price-quote" form
3. Set up email notifications
4. Configure webhook if needed

## Benefits of This Approach

✅ **Compatible with Next.js 16** - Works with latest Next.js version
✅ **Edge Runtime** - Fast form processing with edge functions
✅ **Type Safe** - Full TypeScript support
✅ **Better UX** - Proper error handling and loading states
✅ **Netlify Native** - Uses Netlify's built-in form handling

## Related Documentation

- [Netlify Forms with Next.js Runtime](https://ntl.fyi/next-runtime-forms-migration)
- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

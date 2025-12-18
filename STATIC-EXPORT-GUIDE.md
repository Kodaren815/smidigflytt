# Static Export Deployment Guide for Netlify

## Overview
This guide explains how to deploy the Smidigflytt website using Next.js static export (generating an `out` folder) while maintaining full Netlify Forms functionality.

## How It Works

### Static Export
- Next.js generates pure HTML/CSS/JS files in the `out` folder
- No server-side rendering needed
- Faster, more cost-effective hosting
- Compatible with any static hosting (Netlify, Vercel, etc.)

### Netlify Forms with Static Export
✅ **Forms Still Work!** Here's how:
1. Hidden form in HTML is detected by Netlify during build
2. Netlify automatically creates a form handler
3. JavaScript submits to Netlify's form endpoint
4. All submissions appear in Netlify dashboard
5. Email notifications work as usual

## Deployment Methods

### Method 1: Direct Netlify Deployment (Recommended)

#### Step 1: Push to Git Repository
```bash
git add .
git commit -m "Configure for static export"
git push origin main
```

#### Step 2: Deploy on Netlify
1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Netlify auto-detects settings from `netlify.toml`:
   - **Build command**: `cp next.config.static.ts next.config.ts && npm run build`
   - **Publish directory**: `out`
5. Click "Deploy site"
6. Wait 3-5 minutes for build to complete

#### Step 3: Configure Form Notifications
1. Go to Site settings → Forms
2. Click "Form notifications"
3. Add email notification: **info@smidigflytt365.se**
4. Select form: **price-quote**
5. Save

### Method 2: Manual Upload (Drag & Drop)

#### Step 1: Build Locally
```bash
# Copy static export config
cp next.config.static.ts next.config.ts

# Install dependencies (if needed)
npm install

# Build static site
npm run build

# The 'out' folder is now ready
```

#### Step 2: Upload to Netlify
1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the entire `out` folder
4. Wait for upload to complete (1-2 minutes)
5. Your site is live!

#### Step 3: Configure Form Notifications
1. Go to Site settings → Forms
2. Click "Form notifications"
3. Add email notification: **info@smidigflytt365.se**
4. Select form: **price-quote**
5. Save

## Testing Forms After Deployment

### 1. Test Form Submission
1. Visit your deployed site
2. Navigate to pricing calculator (`/offert`)
3. Fill out all steps
4. Submit the form
5. You should see success message

### 2. Verify in Netlify Dashboard
1. Go to your site dashboard
2. Click "Forms" in the left sidebar
3. You should see "price-quote" form
4. Click on it to see submissions
5. Your test submission should appear

### 3. Check Email Notification
- Email should arrive at info@smidigflytt365.se
- If not, check spam folder
- Verify email is configured in Form notifications

## Files Configuration

### Key Files for Static Export

1. **next.config.static.ts** - Static export configuration
   ```typescript
   {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   }
   ```

2. **netlify.toml** - Netlify configuration
   ```toml
   [build]
     command = "cp next.config.static.ts next.config.ts && npm run build"
     publish = "out"
   ```

3. **PriceCalculator.tsx** - Contains hidden form for Netlify detection
   ```html
   <form name="price-quote" data-netlify="true" hidden>
   ```

## Build Commands Reference

### Local Development
```bash
npm run dev
```

### Build for Netlify (Local Test)
```bash
npm run build:static
# or
npm run build:netlify
```

### Serve Built Site Locally
```bash
npx serve out
```

## Troubleshooting

### Forms Not Showing in Netlify
**Problem**: Form submissions don't appear in dashboard

**Solutions**:
1. Check that hidden form exists in built HTML:
   ```bash
   # After building, check out folder
   grep -r "data-netlify" out/
   ```
2. Verify form name matches: `price-quote`
3. Re-deploy and wait 5 minutes for Netlify to detect forms

### Build Fails
**Problem**: Build command fails on Netlify

**Solutions**:
1. Check build logs in Netlify dashboard
2. Verify Node version is 20:
   ```toml
   [build.environment]
     NODE_VERSION = "20"
   ```
3. Clear cache and rebuild

### Images Not Loading
**Problem**: Images appear broken

**Solution**: Images are unoptimized in static export (normal behavior)
- To optimize, use external image CDN
- Or use Next.js Image component with custom loader

### Form Submission Fails
**Problem**: Form shows error when submitting

**Solutions**:
1. Check browser console for errors
2. Verify Netlify Forms are enabled (Site settings → Forms)
3. Check that hidden form has all fields:
   ```html
   <form name="price-quote" data-netlify="true" hidden>
     <!-- All form fields must be here -->
   </form>
   ```

## Advantages of Static Export

✅ **Fast**: No server-side processing
✅ **Cheap**: Free tier is usually sufficient
✅ **Simple**: Just HTML/CSS/JS files
✅ **Portable**: Can host anywhere
✅ **SEO Friendly**: All pages pre-rendered
✅ **Forms Work**: Netlify Forms fully supported

## Limitations to Note

❌ **No API Routes**: `/api/*` routes don't work (not needed for this project)
❌ **No ISR**: No Incremental Static Regeneration
❌ **No Server Components**: Only client-side rendering
✅ **Forms Still Work**: Netlify Forms work perfectly!

## Form Data Structure

Each pricing quote submission includes:

### For Moving Services (flyttjänster)
- Service type
- Date
- From address & postal code
- To address & postal code
- From housing details (type, size, floor, elevator, balcony)
- To housing details (type, size, floor, elevator, balcony)
- Contact info (name, phone, email)
- Extra information

### For Cleaning Services (städtjänster)
- Service type
- Date
- Address & postal code
- Housing details (type, size, floor, elevator, balcony)
- Contact info (name, phone, email)
- Extra information

## Export Form Data

From Netlify dashboard:
1. Go to Forms → price-quote
2. Click "Export" button
3. Download as CSV
4. Open in Excel/Google Sheets

## Integration Options

### Email
✅ **Already configured**: Forms → Notifications → Email

### Zapier
1. Go to Forms → Form notifications
2. Add Zapier webhook
3. Connect to your CRM, Slack, etc.

### Webhook
1. Create custom webhook endpoint
2. Add in Form notifications
3. Receive real-time POST requests

### Slack
1. Create Slack incoming webhook
2. Add as notification in Netlify Forms
3. Get instant notifications in Slack channel

## Quick Reference

### Deploy from Scratch
```bash
# 1. Build locally
cp next.config.static.ts next.config.ts
npm install
npm run build

# 2. Upload 'out' folder to Netlify
# (via drag & drop or CLI)

# 3. Configure form notifications
# (in Netlify dashboard)
```

### Update Existing Site
```bash
# 1. Make changes
# 2. Rebuild
npm run build

# 3. Re-upload 'out' folder
# or push to Git (auto-deploys)
```

## Support

- **Netlify Forms Docs**: https://docs.netlify.com/forms/setup/
- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Netlify Support**: https://www.netlify.com/support/

---

**Your site is now ready for static deployment with full form functionality!** 🚀

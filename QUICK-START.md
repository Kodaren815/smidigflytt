# Quick Start: Static Export to Netlify

## For Static Export with Forms Working

### Option 1: Manual Build and Upload (Simplest)

#### Step 1: Build Locally
```bash
cd /Users/lawand/Desktop/Clients/SmidigFlytt/smidigflytt-website

# Use the production config (keeps API routes for admin)
npm run build
```

**Note**: The default config uses standalone mode which works great on Netlify!

#### Step 2: Deploy to Netlify

**Via Git (Recommended)**:
1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Settings auto-detected from `netlify.toml`
4. Deploy automatically

**Via Netlify CLI**:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Via Drag & Drop**:
1. Go to netlify.com
2. Drag `.next` folder to deploy

### Option 2: True Static Export (No API Routes)

If you want pure HTML files in `out` folder:

```bash
# Build with static config
cp next.config.static.ts next.config.ts
npm run build

# Upload the 'out' folder to Netlify
```

**Trade-off**: 
- ✅ Pure static files
- ❌ No admin API routes (but forms still work!)

## ✅ Forms Work in Both Methods!

The pricing calculator form will work regardless of deployment method because:
1. Hidden form exists in HTML
2. Netlify detects it during build
3. Netlify creates form handler automatically
4. All submissions go to Netlify dashboard

## Recommended: Use Default Config

**Keep `next.config.ts` as-is** (output: 'standalone')

Benefits:
- ✅ Forms work perfectly
- ✅ API routes available if needed
- ✅ Easier deployment
- ✅ Better for future features

The `netlify.toml` is already configured for this!

## Test Build Locally

```bash
# Production build
npm run build

# Test locally (optional)
npm run start
```

## Deploy to Netlify

### Method 1: Via Git (Best)
```bash
git add .
git commit -m "Ready for Netlify"
git push

# Then connect repo in Netlify dashboard
```

### Method 2: Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Method 3: Manual Upload
1. Run `npm run build`
2. Go to app.netlify.com
3. Drag `.next` folder to deploy area

## Configure Forms

After deployment:
1. Site → Forms → Form notifications
2. Add email: **info@smidigflytt365.se**
3. Select form: **price-quote**
4. Save

Done! 🎉

## Summary

**Simplest path**:
1. Keep current `next.config.ts`
2. Push to Git
3. Connect to Netlify
4. Configure form notifications
5. Your site is live with working forms!

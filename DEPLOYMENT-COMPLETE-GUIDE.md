# Complete Netlify Deployment Guide

## ✅ What's Been Updated

### Contact Information
- **Phone**: 08-27 09 09 (displayed throughout site)
- **SMS**: 076-178 05 52 (new feature added)
- **Email**: info@smidigflytt365.se
- **Address**: Pressargatan 12, 632 29 Eskilstuna

### Pricing Calculator
- Now submits to **Netlify Forms** instead of API
- All quote requests appear in Netlify dashboard
- Email notifications can be configured
- Form name: **price-quote**

## 🚀 Two Deployment Options

### Option A: Standard Next.js Build (RECOMMENDED)

**Best for**: Full features, easier deployment, future scalability

#### What You Get:
- ✅ Netlify Forms work perfectly
- ✅ API routes available (admin panel works)
- ✅ Dynamic features supported
- ✅ Automatic optimization by Netlify

#### How to Deploy:

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Deploy to Netlify"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"

3. **Configure Form Notifications**
   - Go to Site settings → Forms → Form notifications
   - Click "Add notification"
   - Select "Email notification"
   - Enter: **info@smidigflytt365.se**
   - Choose form: **price-quote**
   - Save

**That's it!** 🎉

---

### Option B: Pure Static Export

**Best for**: Ultra-simple hosting, maximum portability

#### What You Get:
- ✅ Netlify Forms still work!
- ✅ Pure HTML/CSS/JS files
- ✅ Can host anywhere
- ❌ No admin API routes

#### How to Deploy:

1. **Build Static Files**
   ```bash
   cd /Users/lawand/Desktop/Clients/SmidigFlytt/smidigflytt-website
   cp next.config.static.ts next.config.ts
   npm run build
   ```
   
   This creates an `out` folder with pure HTML files.

2. **Upload to Netlify**
   
   **Method 1: Drag & Drop**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag the `out` folder
   - Wait for upload
   
   **Method 2: Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   ```

3. **Configure Form Notifications** (same as Option A)

---

## 📋 Comparison

| Feature | Option A (Standard) | Option B (Static) |
|---------|-------------------|-------------------|
| **Deployment** | Git push + auto-deploy | Manual build + upload |
| **Netlify Forms** | ✅ Works perfectly | ✅ Works perfectly |
| **Admin Panel** | ✅ Available | ❌ Not available |
| **Build Time** | ~2-5 minutes | ~1-3 minutes |
| **Flexibility** | 🔥 High | ⚡ Limited |
| **Hosting** | Netlify only | Anywhere |

## 🎯 Recommended: Option A

**Why?**
- Easier to deploy (just git push)
- Automatic deploys on code changes
- Keeps all features functional
- Better for future updates
- Netlify Forms work the same way

## 📧 How Forms Work

Regardless of deployment method:

1. **Hidden Form** in `PriceCalculator.tsx`:
   ```html
   <form name="price-quote" data-netlify="true" hidden>
     <!-- All form fields -->
   </form>
   ```

2. **Netlify Detection**: During build, Netlify finds this form

3. **Form Handler Created**: Netlify creates endpoint automatically

4. **JavaScript Submission**: When user submits, data goes to Netlify

5. **View in Dashboard**: All submissions appear in Site → Forms

6. **Email Notifications**: Sent to configured email address

## 🔧 Configuration Files

### For Option A (Standard - DEFAULT)
- `next.config.ts` - Already configured ✅
- `netlify.toml` - Already configured ✅
- `PriceCalculator.tsx` - Already configured ✅

### For Option B (Static)
- `next.config.static.ts` - Available for use
- Update netlify.toml publish to `out`
- Everything else stays the same

## 🧪 Testing After Deployment

### 1. Test Contact Info
- [ ] Visit homepage
- [ ] Check header shows: 08-27 09 09 and 076-178 05 52
- [ ] Scroll to footer - verify address and contact details
- [ ] Visit /kontakt page
- [ ] Test all phone/SMS links

### 2. Test Form Submission
- [ ] Go to /offert (pricing calculator)
- [ ] Fill out all steps
- [ ] Submit form
- [ ] See success message with correct phone number
- [ ] Check Netlify dashboard → Forms → price-quote
- [ ] Verify submission appears
- [ ] Check email inbox for notification

### 3. Test Navigation
- [ ] Click through all menu items
- [ ] Test service pages
- [ ] Test city pages
- [ ] Verify no broken links

## 📊 Managing Form Submissions

### View Submissions
1. Go to Netlify dashboard
2. Click your site
3. Go to "Forms" in sidebar
4. Click "price-quote"
5. See all submissions with timestamps

### Export Data
1. On forms page, click "Export"
2. Download as CSV
3. Open in Excel/Google Sheets

### Set Up Integrations
- **Email**: Site settings → Forms → Form notifications
- **Slack**: Add Slack webhook
- **Zapier**: Connect for CRM integration
- **Webhook**: Send to custom endpoint

## 🆘 Troubleshooting

### Forms Not Showing Up
**Issue**: Submissions don't appear in Netlify dashboard

**Solutions**:
1. Check hidden form exists in deployed HTML:
   - Visit site
   - View page source (Ctrl/Cmd + U)
   - Search for `data-netlify="true"`
2. Verify form name is `price-quote`
3. Redeploy site
4. Wait 5 minutes for Netlify to process

### Build Fails
**Issue**: Deployment fails during build

**Solutions**:
1. Check build logs in Netlify dashboard
2. Verify Node version is 20
3. Check for TypeScript errors locally:
   ```bash
   npm run build
   ```
4. Clear cache and redeploy

### Email Notifications Not Working
**Issue**: Not receiving form submission emails

**Solutions**:
1. Check spam folder
2. Verify email in Site settings → Forms → Form notifications
3. Test with different email address
4. Check Netlify Forms usage limits

## 💰 Netlify Pricing

### Free Tier Includes:
- ✅ 100 form submissions/month
- ✅ 100GB bandwidth
- ✅ Automatic HTTPS
- ✅ Deploy previews
- ✅ Custom domain
- ✅ Email notifications

### Need More?
- Pro plan: $19/month (1,000 submissions)
- Business plan: $99/month (10,000 submissions)

For this site, **free tier is perfect** to start! 🎉

## 📞 Need Help?

### Resources
- **Netlify Docs**: https://docs.netlify.com/
- **Netlify Forms**: https://docs.netlify.com/forms/setup/
- **Next.js on Netlify**: https://docs.netlify.com/frameworks/next-js/
- **Netlify Support**: https://www.netlify.com/support/

### Quick Links
- [QUICK-START.md](./QUICK-START.md) - Fastest deployment path
- [STATIC-EXPORT-GUIDE.md](./STATIC-EXPORT-GUIDE.md) - Detailed static export info
- [CLIENT-UPDATES-SUMMARY.md](./CLIENT-UPDATES-SUMMARY.md) - What changed

## ✨ Final Checklist

Before deploying:
- [ ] All changes committed to Git
- [ ] Phone/SMS numbers verified in all pages
- [ ] Address updated in Footer and Contact page
- [ ] Forms tested locally
- [ ] Build succeeds locally: `npm run build`

After deploying:
- [ ] Site loads correctly
- [ ] Contact information displayed correctly
- [ ] Forms submit successfully
- [ ] Submissions appear in Netlify dashboard
- [ ] Email notifications received
- [ ] All pages working
- [ ] Custom domain configured (if applicable)

---

**You're all set!** 🚀 Deploy with confidence knowing forms will work perfectly!

# Netlify Deployment Checklist

## Pre-Deployment ✅
- [x] Phone number updated (08-27 09 09)
- [x] SMS number added (076-178 05 52)
- [x] Address updated (Pressargatan 12, 632 29 Eskilstuna)
- [x] Pricing calculator configured for Netlify Forms
- [x] netlify.toml created
- [x] All files updated and tested

## Deployment Steps

### 1. Connect to Netlify
- [ ] Create account at netlify.com
- [ ] Click "Add new site"
- [ ] Choose "Import an existing project"
- [ ] Connect GitHub/GitLab account
- [ ] Select smidigflytt-website repository

### 2. Configure Build
- [ ] Verify settings (auto-detected from netlify.toml):
  - Build command: `npm run build`
  - Publish directory: `.next`
  - Node version: 20
- [ ] Click "Deploy site"
- [ ] Wait for build to complete

### 3. Set Up Form Notifications
- [ ] Go to Site settings
- [ ] Click Forms → Form notifications
- [ ] Click "Add notification"
- [ ] Select "Email notification"
- [ ] Enter email: info@smidigflytt365.se
- [ ] Choose form: "price-quote"
- [ ] Save settings

### 4. Test Forms
- [ ] Visit deployed site
- [ ] Fill out pricing calculator
- [ ] Submit form
- [ ] Check Netlify dashboard for submission
- [ ] Verify email received

### 5. Custom Domain (Optional)
- [ ] Go to Site settings → Domain management
- [ ] Click "Add custom domain"
- [ ] Enter your domain (e.g., smidigflytt365.se)
- [ ] Update DNS records as instructed
- [ ] Wait for SSL certificate (automatic)

## Post-Deployment Testing

### Contact Information
- [ ] Header shows: 08-27 09 09 and 076-178 05 52
- [ ] Footer shows: Phone, SMS, Email, and Address
- [ ] Contact page displays all info correctly
- [ ] All phone links work (tel: links)
- [ ] All SMS links work (sms: links)

### Pricing Calculator
- [ ] Form loads correctly
- [ ] All steps work smoothly
- [ ] Submission succeeds
- [ ] Success message shows correct phone
- [ ] Submission appears in Netlify dashboard
- [ ] Email notification received

## Need Help?

📖 **Full Guide**: See NETLIFY-DEPLOYMENT.md
📝 **Summary**: See CLIENT-UPDATES-SUMMARY.md
💬 **Netlify Support**: https://www.netlify.com/support/

---

**Estimated Time**: 15-20 minutes for complete setup
**Cost**: Free tier includes 100 form submissions/month

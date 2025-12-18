# Netlify Deployment Guide for Smidigflytt Website

## Prerequisites
- A Netlify account (free tier works)
- GitHub/GitLab repository with this code

## Deployment Steps

### 1. Connect Repository to Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, etc.)
4. Select the `smidigflytt-website` repository
5. Netlify will auto-detect the settings from `netlify.toml`

### 2. Configure Build Settings

The following settings are already configured in `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 20

### 3. Environment Variables (if needed)

If you have any API keys or secrets, add them in:
- Site settings → Build & deploy → Environment → Environment variables

### 4. Enable Form Notifications

To receive pricing quote submissions:

1. Go to Site settings → Forms
2. Form notifications are already enabled in `netlify.toml`
3. Configure email notifications:
   - Go to Site settings → Forms → Form notifications
   - Add notification emails (e.g., info@smidigflytt365.se)
   - Choose "Email notification" and enter recipient email
4. Each pricing quote will be sent to the configured email

### 5. Deploy

Click "Deploy site" and Netlify will:
- Install dependencies
- Build the Next.js application
- Deploy to a `.netlify.app` domain
- Set up form handling automatically

### 6. Custom Domain (Optional)

To use your own domain:
1. Go to Site settings → Domain management
2. Add custom domain (e.g., smidigflytt365.se)
3. Update DNS records as instructed by Netlify
4. Netlify will automatically provision SSL certificate

## Form Submissions

The pricing calculator form (`price-quote`) will submit to Netlify Forms:
- View submissions: Site → Forms
- Download submissions as CSV
- Set up email/webhook notifications
- Integrate with Zapier for advanced automation

## Continuous Deployment

Every push to your main branch will trigger an automatic deployment.

To disable auto-deploy:
- Site settings → Build & deploy → Continuous deployment → Edit settings

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Verify Node version (should be 20)
- Check for TypeScript errors

### Forms Not Working
- Ensure the hidden form is present in PriceCalculator component
- Verify `data-netlify="true"` attribute exists
- Check form name matches in both hidden form and submission code

### 404 Errors
- Verify `_redirects` file is in the `public` folder
- Check `netlify.toml` redirect rules

## Support

For Netlify-specific issues, check:
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Support](https://www.netlify.com/support/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)

## Contact Information

Website displays:
- **Phone**: 08-27 09 09
- **SMS**: 076-178 05 52
- **Email**: info@smidigflytt365.se
- **Address**: Pressargatan 12, 632 29 Eskilstuna

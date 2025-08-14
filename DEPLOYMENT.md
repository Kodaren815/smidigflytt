# Smidigflytt Deployment Guide

This guide covers how to deploy the Smidigflytt website to various platforms.

## 🐳 Docker Deployment (VPS/Self-hosted)

### Prerequisites
- Docker and Docker Compose installed on your server
- Port 3000 (or 80/443 for production) available

### Quick Deployment
```bash
# Clone the repository
git clone <your-repo-url>
cd smidigflytt-website

# Start the application
./deploy-vps.sh
```

### Manual Docker Deployment
```bash
# Development
docker-compose up -d --build

# Production with Nginx
docker-compose -f docker-compose.prod.yml up -d --build --profile production
```

### Environment Setup
The application will create a `data/` directory for storing form submissions. Ensure this directory persists between deployments by mounting it as a volume.

## ☁️ Vercel Deployment

### Prerequisites
- Vercel CLI installed: `npm i -g vercel`
- Vercel account

### Deployment Steps
```bash
# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Important Notes for Vercel
- File uploads are stored in memory and will be lost on serverless function restarts
- Consider using external storage (AWS S3, Cloudinary) for production file handling
- The `data/` directory won't persist between function invocations

## 🌐 Netlify Deployment

### Prerequisites
- Netlify CLI installed: `npm i -g netlify-cli`
- Netlify account

### Deployment Steps
```bash
# Login to Netlify
netlify login

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Netlify Configuration
Create a `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/admin"
  to = "/admin"
  status = 200

[[redirects]]
  from = "/api/*"
  to = "/api/:splat"
  status = 200
```

## 🔧 VPS Server Setup (Ubuntu/Debian)

### 1. Install Docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

### 2. Install Docker Compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. Deploy Application
```bash
git clone <your-repo-url>
cd smidigflytt-website
./deploy-vps.sh
```

### 4. Setup SSL (Optional)
For production with SSL, place your certificates in an `ssl/` directory:
- `ssl/cert.pem` - SSL certificate
- `ssl/key.pem` - Private key

Then run:
```bash
docker-compose -f docker-compose.prod.yml up -d --build --profile production
```

## 📁 Data Persistence

### File Storage Locations
- **Docker**: `/app/data` (mounted to host `./data`)
- **Vercel**: Temporary (consider external storage)
- **Netlify**: Not supported (consider external storage)

### Data Files
- `data/contacts.json` - Contact form submissions
- `data/quotes.json` - Quote requests
- `data/damage-reports.json` - Damage reports with file attachments

## 🔒 Security Considerations

### Admin Access
- Default password: `smidigflytt2024admin`
- **Change this password** in production by modifying `src/app/api/admin/route.ts`

### Production Recommendations
1. Change the admin password
2. Use HTTPS (SSL certificates)
3. Configure firewall to only allow necessary ports
4. Regular backups of the `data/` directory
5. Monitor application logs

## 🚀 Performance Optimization

### Docker Production Tips
- Use multi-stage builds (already configured)
- Enable gzip compression (Nginx config provided)
- Set up proper logging and monitoring

### Serverless Deployment Tips (Vercel/Netlify)
- Optimize image sizes and formats
- Use external storage for file uploads
- Implement CDN for static assets

## 📊 Monitoring

### Health Checks
The Docker setup includes health checks. Monitor with:
```bash
docker-compose ps
docker-compose logs -f
```

### Application URLs
- **Main site**: `http://your-domain.com`
- **Admin panel**: `http://your-domain.com/admin`
- **API endpoints**: `http://your-domain.com/api/*`

## 🛠️ Troubleshooting

### Common Issues
1. **Port already in use**: Change port in docker-compose.yml
2. **Permission denied**: Ensure Docker has proper permissions
3. **Build fails**: Check Node.js version (requires 18+)
4. **Data not persisting**: Verify volume mounts in docker-compose.yml

### Logs
```bash
# Docker logs
docker-compose logs -f

# Container inspection
docker inspect smidigflytt-website_smidigflytt-web_1
```

## 📞 Support
For deployment issues or questions, check the logs first. The application includes comprehensive error handling and logging.

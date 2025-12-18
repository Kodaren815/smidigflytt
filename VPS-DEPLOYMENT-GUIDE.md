# 🚀 VPS Deployment Guide for Smidigflytt365.se

## Current Issue Analysis

You're experiencing:
1. **SSL Warning**: No certificate for `smidigflytt365.se`
2. **Wrong Content**: Nginx serving `mblokalatjanster.se` content on `smidigflytt365.se` domain

## 📋 Step-by-Step Fix

### Step 1: Upload Files to VPS
```bash
# From your local machine, sync files to VPS
rsync -avz --exclude node_modules --exclude .git --exclude .next \
  /Users/lawand/Desktop/SmidigFlytt/smidigflytt-website/ \
  user@your-vps-ip:/home/user/smidigflytt/
```

### Step 2: Deploy on VPS
SSH into your VPS and run:
```bash
cd /home/user/smidigflytt/
sudo chmod +x vps-deploy.sh
sudo ./vps-deploy.sh
```

### Step 3: Update Nginx Configuration

**Option A: If you have separate server blocks per domain**
Add the content from `nginx-smidigflytt-vps.conf` to:
- `/etc/nginx/sites-available/smidigflytt365.se`
- Create symlink: `ln -s /etc/nginx/sites-available/smidigflytt365.se /etc/nginx/sites-enabled/`

**Option B: If you have one main nginx.conf**
Add the server blocks from `nginx-smidigflytt-vps.conf` to your existing `/etc/nginx/nginx.conf` inside the `http` block.

### Step 4: Get SSL Certificate
```bash
# Install certbot if not already installed
sudo apt update && sudo apt install certbot python3-certbot-nginx

# Get SSL certificate for smidigflytt365.se
sudo certbot --nginx -d smidigflytt365.se -d www.smidigflytt365.se

# Test auto-renewal
sudo certbot renew --dry-run
```

### Step 5: Test and Reload Nginx
```bash
# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx

# Check nginx status
sudo systemctl status nginx
```

### Step 6: Verify Services
```bash
# Check if smidigflytt container is running
docker ps | grep smidigflytt

# Check smidigflytt logs
docker logs smidigflytt-app

# Test the services
curl -I http://localhost:3002/api/health  # Should return 200
curl -I https://smidigflytt365.se/sitemap.xml  # Should return 200 with XML
```

## 🔧 Troubleshooting

### If SSL Certificate Fails
```bash
# Check if domain points to your VPS
nslookup smidigflytt365.se

# Check if ports 80 and 443 are open
sudo ufw status
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

### If Container Won't Start
```bash
# Check detailed logs
docker logs smidigflytt-app --tail 50

# Check if port 3002 is available
sudo netstat -tlnp | grep :3002

# Restart the service
docker restart smidigflytt-app
```

### If Wrong Content Still Appears
1. Check nginx server_name directives are unique
2. Reload nginx: `sudo systemctl reload nginx`
3. Clear browser cache
4. Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

## 📁 Required Files on VPS

Ensure these files are uploaded:
```
smidigflytt/
├── docker-compose.production.yml
├── Dockerfile.optimized  
├── package.json
├── src/
├── public/
├── nginx-smidigflytt-vps.conf (for reference)
├── vps-deploy.sh
└── data/ (will be created)
```

## 🎯 Expected Results

After following these steps:
- ✅ `https://smidigflytt365.se` → redirects to `https://www.smidigflytt365.se`
- ✅ `https://www.smidigflytt365.se` → shows Smidigflytt content
- ✅ `https://www.smidigflytt365.se/sitemap.xml` → returns XML sitemap
- ✅ SSL certificate valid (no browser warnings)
- ✅ Both `mblokalatjanster.se` and `smidigflytt365.se` work independently

## 📞 Need Help?

If issues persist, check:
1. DNS: Does `smidigflytt365.se` point to your VPS IP?
2. Firewall: Are ports 80/443 open?
3. Nginx logs: `sudo tail -f /var/log/nginx/error.log`
4. Container logs: `docker logs smidigflytt-app -f`

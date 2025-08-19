# SmidigFlytt VPS Deployment Guide

This directory contains the necessary files for deploying SmidigFlytt to your Ubuntu VPS using Docker.

## Files Created/Modified

- `docker-compose.vps.yml` - Production Docker Compose configuration
- `setup-vps.sh` - Main setup script for initial deployment
- `update-vps.sh` - Quick update script for future deployments
- `nginx-vps-config.conf` - Sample Nginx configuration
- `next.config.ts` - Updated with standalone output for Docker

## Prerequisites

Your Ubuntu VPS should have:
- Docker and Docker Compose installed
- Nginx installed and running
- Git installed
- SSL certificates (optional but recommended)

## Deployment Instructions

### 1. Initial Setup

1. Upload your project files to the VPS or clone from Git
2. Make the setup script executable:
   ```bash
   chmod +x setup-vps.sh
   ```
3. Run the setup script:
   ```bash
   ./setup-vps.sh
   ```
4. Follow the prompts to configure your domain and SSL certificates

### 2. What the Setup Script Does

- Checks prerequisites (Docker, Docker Compose, Nginx, Git)
- Verifies port 3001 is available
- Creates project directory at `/opt/smidigflytt`
- Sets up data directory with proper permissions
- Creates environment configuration
- Configures Nginx with your domain
- Builds Docker image
- Starts the application
- Tests the configuration

### 3. Future Updates

To update the application:
```bash
chmod +x update-vps.sh
./update-vps.sh
```

## Configuration Details

### Ports
- Application runs on port 3001 internally (mapped from container port 3000)
- Nginx proxies requests from port 80/443 to 3001

### Docker Configuration
- Uses multi-stage build for optimized image size
- Includes health checks
- Persistent data volume for file storage
- Automatic restart policy

### Nginx Integration
- Integrates with your existing Nginx setup
- Supports both HTTP and HTTPS
- Includes security headers and gzip compression
- Optimized for Next.js applications

## Useful Commands

### Docker Management
```bash
# View application logs
docker compose -f docker-compose.vps.yml logs -f

# Check container status
docker compose -f docker-compose.vps.yml ps

# Restart application
docker compose -f docker-compose.vps.yml restart

# Stop application
docker compose -f docker-compose.vps.yml down

# Rebuild and restart
docker compose -f docker-compose.vps.yml up -d --build
```

### Nginx Management
```bash
# Test Nginx configuration
sudo nginx -t

# Reload Nginx configuration
sudo systemctl reload nginx

# Check Nginx status
sudo systemctl status nginx
```

## Troubleshooting

### Application Won't Start
1. Check Docker logs: `docker compose -f docker-compose.vps.yml logs`
2. Verify port 3001 is not in use: `netstat -tuln | grep :3001`
3. Check available disk space: `df -h`

### Nginx Issues
1. Test configuration: `sudo nginx -t`
2. Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
3. Verify site is enabled: `ls -la /etc/nginx/sites-enabled/`

### SSL Certificate Issues
1. Verify certificate files exist and are readable
2. Check certificate expiration: `openssl x509 -in /path/to/cert.crt -text -noout`
3. Update certificate paths in Nginx configuration

## File Structure After Deployment

```
/opt/smidigflytt/
├── .env.production
├── docker-compose.vps.yml
├── Dockerfile
├── next.config.ts
├── package.json
├── data/              # Persistent data directory
├── src/               # Application source code
└── ...                # Other project files
```

## Security Considerations

- Application runs as non-root user (nextjs)
- Nginx includes security headers
- File upload limits configured
- SSL/TLS encryption (when certificates provided)
- Container isolated in custom network

## Monitoring

The application includes health checks that verify:
- Container is responding on port 3000
- Application is accessible via HTTP

Monitor using:
```bash
docker compose -f docker-compose.vps.yml ps
```

## Backup

Important files to backup:
- `/opt/smidigflytt/data/` - Application data
- `/etc/nginx/sites-available/smidigflytt` - Nginx configuration
- SSL certificates

## Support

If you encounter issues:
1. Check the logs using the commands above
2. Verify all prerequisites are installed
3. Ensure your domain DNS is pointing to the VPS
4. Check firewall settings allow traffic on ports 80/443

# Smidigflytt VPS Deployment - Multi-Service Setup

This guide explains how to deploy the Smidigflytt website alongside your existing `mblokalatjanster` service on the same VPS.

## ✅ Sitemap Configuration

The website includes **dynamic sitemap generation** that automatically:
- Uses the correct domain: `https://www.smidigflytt365.se/sitemap.xml`
- Updates automatically with current timestamp
- Includes all pages (main, services, cities)
- Is properly configured for nginx routing

## Architecture Overview

Your VPS will run:
- **mblokalatjanster** on port 3001 (existing)
- **smidigflytt** on port 3002 (new)
- **nginx** as a reverse proxy routing traffic based on domain names

## Deployment Options

### Option 1: Deploy Alongside Existing Services (Recommended)

Use this if you want to keep your current nginx setup and just add smidigflytt:

1. **Deploy smidigflytt service:**
   ```bash
   ./deploy-standalone.sh
   ```

2. **Update your existing nginx configuration** to include smidigflytt routing:
   - Add the smidigflytt upstream and server block from `nginx-multi-service.conf`
   - Make sure both services are in the same `web-network`

### Option 2: Replace Nginx with Multi-Service Configuration

If you want to use our comprehensive nginx setup:

1. **Stop your current nginx:**
   ```bash
   docker stop your-nginx-container
   ```

2. **Deploy with new nginx:**
   ```bash
   docker compose -f docker-compose-with-nginx.yml up -d --build
   ```

## File Explanations

### `docker-compose.yml` (Modified)
- Uses port 3002 to avoid conflicts
- Connects to `web-network` for communication with other services
- Includes proper healthchecks and volume mounts

### `nginx-multi-service.conf`
- Routes traffic based on server_name
- Handles both smidigflytt365.se and your mblokalatjanster domain
- Includes proper proxy headers and static file serving

### `Dockerfile`
- Optimized for production with multi-stage build principles
- Non-root user for security
- Built-in healthcheck

## Network Configuration

Both services use the `web-network` Docker network:
```yaml
networks:
  web-network:
    external: false
    name: web-network
```

## Port Mapping

- **mblokalatjanster**: External port 3001 → Internal port 3000
- **smidigflytt**: External port 3002 → Internal port 3000
- **nginx**: External ports 80/443 → Internal ports 80/443

## Domain Configuration

Update the nginx configuration with your actual domains:
- `smidigflytt365.se` → routes to smidigflytt service
- `your-mblokalatjanster-domain.com` → routes to mblokalatjanster service

## SSL/HTTPS Setup

To add SSL certificates:

1. Obtain certificates (Let's Encrypt recommended)
2. Mount certificate files in nginx container:
   ```yaml
   volumes:
     - ./ssl:/etc/nginx/ssl:ro
   ```
3. Add SSL server blocks to nginx configuration

## Monitoring and Logs

**View logs:**
```bash
# Smidigflytt logs
docker logs -f smidigflytt-app

# Mblokalatjanster logs  
docker logs -f mblokalatjanster-app

# Nginx logs
docker logs -f nginx-proxy
```

**Health checks:**
- Both services have built-in health checks
- Check status: `docker ps`
- Detailed health: `docker inspect container-name`

## Troubleshooting

### Port Conflicts
If you get port binding errors:
- Check what's using the ports: `sudo netstat -tulpn | grep :3002`
- Modify port in docker-compose.yml if needed

### Network Issues
Ensure both services are on the same network:
```bash
docker network inspect web-network
```

### Service Not Responding
1. Check container logs
2. Verify network connectivity between containers
3. Test direct access to services on their ports

## Updating Services

**Update smidigflytt:**
```bash
docker compose up -d --build smidigflytt
```

**Update both services:**
```bash
docker compose down
docker compose up -d --build
```

## Backup Considerations

Important directories to backup:
- `./data/` - Application data
- `./ssl/` - SSL certificates (if used)
- Configuration files (docker-compose.yml, nginx.conf)

## Performance Optimization

For production use:
- Enable gzip compression (included in nginx config)
- Set up proper log rotation
- Configure nginx worker processes based on CPU cores
- Use Docker resource limits if needed

# Smidigflytt Deployment Guide

This project can be deployed in several ways depending on your environment and requirements.

## 🚀 Deployment Options

### 1. Local Development (Recommended for testing)
Use this for local development and testing without Docker:

```bash
./deploy-local.sh
```

This will:
- Install dependencies with `npm install`
- Build the application with `npm run build`
- Start the production server with `npm start`
- Application will be available at http://localhost:3000

### 2. VPS Deployment with Docker
Use this for production deployment on a VPS with Docker:

```bash
./deploy-vps.sh
```

This will:
- Check for Docker installation
- Use `docker compose` to build and deploy
- Application will be available at http://localhost:3001
- Includes health checks and persistent data storage

## 📋 Prerequisites

### For Local Deployment
- Node.js (v18 or higher)
- npm

### For Docker Deployment
- Docker (with Docker Compose)
- For VPS deployment: Linux server with Docker installed

## 🐳 Docker Installation

### Ubuntu/Debian
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
# Log out and back in for group changes to take effect
```

### CentOS/RHEL
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo systemctl enable docker
sudo systemctl start docker
```

### macOS
Download Docker Desktop from https://docs.docker.com/get-docker/

## 🔧 Configuration

The application uses different configurations for different environments:

- **Development**: Uses `next dev`
- **Production (Local)**: Uses `next build` + `next start`
- **Production (Docker)**: Uses standalone output with optimized Docker image

## 📁 Data Persistence

The Docker deployment includes:
- Volume mounting for persistent data storage
- Health checks for reliability
- Automatic restart policies

## 🐛 Troubleshooting

### Build Failures
If the build fails, common issues include:
- ESLint errors (check console output)
- TypeScript errors (run `npm run build` locally first)
- Missing dependencies (run `npm install`)

### Docker Issues
- Ensure Docker is running: `docker --version`
- Check Docker Compose: `docker compose version`
- View logs: `docker compose -f docker-compose.vps.yml logs -f`

### Port Conflicts
- Local deployment uses port 3000
- Docker deployment uses port 3001
- Check for conflicting services: `lsof -i :3000` or `lsof -i :3001`

## 📊 Monitoring

### Check Application Status
```bash
# For Docker deployment
docker compose -f docker-compose.vps.yml ps
docker compose -f docker-compose.vps.yml logs -f

# For local deployment
curl http://localhost:3000/api/health
```

### Admin Panel
Access the admin panel at:
- Local: http://localhost:3000/admin
- Docker: http://localhost:3001/admin

## 🔄 Updates

To update the application:

### Local Deployment
```bash
git pull origin main
./deploy-local.sh
```

### Docker Deployment
```bash
git pull origin main
./deploy-vps.sh
```

This will rebuild the Docker image with the latest changes.

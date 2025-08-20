#!/bin/bash
# deploy-to-ubuntu-vps.sh
# Usage: ./deploy-to-ubuntu-vps.sh <VPS_USER> <VPS_IP> <TARGET_DIR_ON_VPS>
# Example: ./deploy-to-ubuntu-vps.sh root 1.2.3.4 /home/ubuntu/smidigflytt

set -e

if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <VPS_USER> <VPS_IP> <TARGET_DIR_ON_VPS>"
  exit 1
fi

VPS_USER=$1
VPS_IP=$2
TARGET_DIR=$3

# 1. Install required packages on VPS
ssh "$VPS_USER@$VPS_IP" "sudo apt-get update && sudo apt-get install -y git docker.io docker-compose nodejs npm nginx"

# 2. Create target directory on VPS
ssh "$VPS_USER@$VPS_IP" "mkdir -p $TARGET_DIR"

# 3. Rsync project files to VPS (excluding node_modules, .git, etc)
rsync -avz --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='*.log' ./ "$VPS_USER@$VPS_IP:$TARGET_DIR/"

# 4. Build and start Docker containers (if Dockerfile/docker-compose.yml exists)
ssh "$VPS_USER@$VPS_IP" "cd $TARGET_DIR/smidigflytt-website && if [ -f docker-compose.yml ]; then sudo docker-compose up -d --build; elif [ -f Dockerfile ]; then sudo docker build -t smidigflytt . && sudo docker run -d -p 3000:3000 smidigflytt; else npm install && npm run build && npm run start & fi"

# 5. Set up Nginx reverse proxy (optional, if nginx.conf exists)
if ssh "$VPS_USER@$VPS_IP" "test -f $TARGET_DIR/smidigflytt-website/nginx.conf"; then
  ssh "$VPS_USER@$VPS_IP" "sudo cp $TARGET_DIR/smidigflytt-website/nginx.conf /etc/nginx/sites-available/smidigflytt && sudo ln -sf /etc/nginx/sites-available/smidigflytt /etc/nginx/sites-enabled/smidigflytt && sudo nginx -t && sudo systemctl reload nginx"
fi

echo "Deployment complete!"

#!/bin/bash

git pull origin main
npm install
npm run build
pm2 stop 0
pm2 delete 0
pm2 start npm --name "SkylarkAI" -- run dev
sudo systemctl restart nginx
echo "nginx restarted"
sudo systemctl status nginx

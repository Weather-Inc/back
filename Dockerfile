FROM node:12.16.3-alpine

# Create app directory
WORKDIR /app

# Copy package.json file
COPY package.json ./

# Install dependencies
RUN npm install

# Install pm-2
RUN npm install -g pm2

# Build the project
RUN npm run build

# Copy packaged sources from build/ directory
COPY build/ ./

# Expose app API port
EXPOSE 3100

# Build the app for production
CMD ["pm2-runtime", "server.js"]

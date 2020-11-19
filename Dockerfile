FROM node:12.16.3-alpine

# Create app directory
WORKDIR /app

# Copy packaged sources from build/ directory
COPY build/ ./

# Expose app API port
EXPOSE 3100

# Build the app for production
CMD ["npm", "run", "prod"]

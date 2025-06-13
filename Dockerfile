# Base image node
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json dan lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua source ke dalam container
COPY . .

# Port yang digunakan oleh Express/Apollo
EXPOSE 8002

# Jalankan aplikasi
CMD ["npm", "run", "dev"]

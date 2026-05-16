# Clone the infrastructure repository
git clone https://github.com/remote-tech-us/platform-infra.git
cd platform-infra

# Initialize environment configurations
cp .env.example .env

# Fire up core dependencies using Docker Compose
docker compose up -d --build

# Verify container runtime states
docker ps

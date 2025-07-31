# ⚙️ Setup & Configuration Hub

**Installation scripts and configuration files for AI Workflow Playbook**

---

## 📂 Setup Structure

### 🔧 **Installation** (`installation/`)
Automated installation scripts and setup tools

- **[📦 install-auto-docs.sh](installation/install-auto-docs.sh)** - Auto-docs system installer

### 📝 **Configuration** (`configuration/`)
Configuration files and settings

- **Configuration files for various system components**

---

## 🚀 Quick Setup

### **1. Automated Installation**
```bash
# Run the main installer
./setup/installation/install-auto-docs.sh

# Or use the quick setup from PROTOTYPES
cd PROTOTYPES
docker-compose -f infrastructure/docker/docker-compose.yml up -d
```

### **2. Manual Configuration**
```bash
# Check configuration files
ls setup/configuration/

# Copy example configurations
cp setup/configuration/.example.yml .env
```

---

## 📋 Installation Options

### **Option 1: Docker (Recommended)**
- Complete containerized setup
- All dependencies included
- Production-ready configuration
- One-command deployment

### **Option 2: Local Development**
- Node.js 18+ required
- Bun recommended (30x faster than npm)
- Manual dependency management
- Development environment

### **Option 3: Cloud Deployment**
- AWS, GCP, Azure compatible
- Kubernetes configurations
- Auto-scaling enabled
- Monitoring included

---

## 🔧 Configuration Files

### **Available Configurations**
- **Docker Compose**: Production stack setup
- **Environment Variables**: Runtime configuration
- **Security Settings**: SSL, authentication, permissions
- **Monitoring**: Prometheus, Grafana, alerting
- **Auto-docs**: Documentation automation

---

## 🎯 System Requirements

### **Minimum Requirements**
- **Node.js**: 18.0.0+
- **Memory**: 2GB RAM
- **Storage**: 5GB available
- **OS**: Linux, macOS, Windows

### **Recommended Requirements**
- **Node.js**: 20.0.0+
- **Bun**: 1.0.0+ (package manager)
- **Memory**: 8GB RAM
- **Storage**: 20GB available
- **CPU**: Multi-core processor

---

## 🔒 Security Setup

### **SSL/TLS Configuration**
```bash
# Generate SSL certificates
npm run ssl:generate

# Or use Let's Encrypt for production
certbot --nginx -d your-domain.com
```

### **Environment Security**
- Secure environment variables
- API key management
- Database credentials
- Service authentication

---

## 📊 Verification

### **Health Checks**
```bash
# Check system status
curl http://localhost/health

# Verify all services
docker-compose ps

# Run diagnostics
npm run test
```

### **Performance Testing**
```bash
# Run performance benchmarks
npm run test:performance

# Check resource usage
docker stats
```

---

## 🆘 Troubleshooting

### **Common Issues**
- Port conflicts → Change ports in configuration
- Permission errors → Check file permissions
- Memory issues → Increase container limits
- Network problems → Verify firewall settings

### **Log Files**
```bash
# Application logs
docker-compose logs -f

# System logs
tail -f /var/log/ai-workflow-playbook.log
```

---

## 🚀 Related Documentation

- **[Documentation/](../documentation/README.md)** - User guides
- **[PROTOTYPES/](../PROTOTYPES/README.md)** - Main application
- **[Management/](../management/README.md)** - Project tracking

---

*Setup & Configuration Hub | AI Workflow Playbook v3.1.1*
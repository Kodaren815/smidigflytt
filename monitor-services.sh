#!/bin/bash

# Service monitoring and maintenance script
# Usage: ./monitor-services.sh [check|restart|logs|cleanup|stats]

COMMAND=${1:-check}

case $COMMAND in
    "check")
        echo "🔍 Checking service status..."
        echo ""
        echo "=== Docker Containers ==="
        docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
        
        echo ""
        echo "=== Health Checks ==="
        for container in smidigflytt-app mblokalatjanster-app; do
            if docker ps | grep -q "$container"; then
                health=$(docker inspect --format='{{.State.Health.Status}}' $container 2>/dev/null || echo "no-healthcheck")
                echo "$container: $health"
            else
                echo "$container: not running"
            fi
        done
        
        echo ""
        echo "=== Network Status ==="
        docker network ls | grep web-network
        ;;
        
    "restart")
        echo "🔄 Restarting services..."
        docker restart smidigflytt-app
        echo "✅ Services restarted"
        ;;
        
    "logs")
        service=${2:-smidigflytt-app}
        echo "📋 Showing logs for $service..."
        docker logs $service -f --tail 50
        ;;
        
    "cleanup")
        echo "🧹 Cleaning up unused resources..."
        docker system prune -f
        docker image prune -f
        echo "✅ Cleanup completed"
        ;;
        
    "stats")
        echo "📊 Resource usage statistics..."
        docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}\t{{.BlockIO}}"
        ;;
        
    *)
        echo "Usage: $0 [check|restart|logs|cleanup|stats]"
        echo ""
        echo "Commands:"
        echo "  check   - Check service status and health"
        echo "  restart - Restart all services"
        echo "  logs    - Show service logs (specify service name as 2nd arg)"
        echo "  cleanup - Clean up unused Docker resources"
        echo "  stats   - Show resource usage statistics"
        ;;
esac

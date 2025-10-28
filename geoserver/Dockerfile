# Imagen estable del GeoServer oficial mantenida por Kartoza
FROM kartoza/geoserver:2.24.2

# Copia el data_dir con tus workspaces y configuraciones
COPY data_dir /opt/geoserver_data_dir

# Variables de entorno recomendadas para plan gratuito Render
ENV JAVA_OPTS="-Xms256m -Xmx512m -XX:+UseG1GC -Duser.timezone=America/Bogota"

# Exponer el puerto del GeoServer
EXPOSE 8080

# Healthcheck para validar que el servicio responde
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s \
  CMD curl -f http://localhost:8080/geoserver/ows?service=WMS&request=GetCapabilities || exit 1

# Imagen base estable
FROM kartoza/geoserver:2.24.2

# Copia la configuración personalizada
COPY data_dir /opt/geoserver_data_dir

# Variables de entorno
ENV JAVA_OPTS="-Xms256m -Xmx512m -XX:+UseG1GC -Duser.timezone=America/Bogota"
ENV PORT=8080
EXPOSE 8080

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s \
  CMD curl -f http://localhost:8080/geoserver/ows?service=WMS&request=GetCapabilities || exit 1

# Comando explícito para iniciar GeoServer
CMD ["catalina.sh", "run"]

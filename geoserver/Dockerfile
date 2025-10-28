# Imagen base más liviana y actualizada
FROM kartoza/geoserver:2.24.2

# Copiar la configuración personalizada
COPY data_dir /opt/geoserver_data_dir

# Configurar entorno
ENV GEOSERVER_DATA_DIR=/opt/geoserver_data_dir
ENV PORT=8080
ENV JAVA_OPTS="-Xms128m -Xmx384m -XX:+UseG1GC -Duser.timezone=America/Bogota"

# Modificar el conector de Tomcat para escuchar en 0.0.0.0
RUN sed -i 's/port="8080"/port="8080" address="0.0.0.0"/' /usr/local/tomcat/conf/server.xml

# Exponer el puerto
EXPOSE 8080

# Comando de arranque
CMD ["catalina.sh", "run"]


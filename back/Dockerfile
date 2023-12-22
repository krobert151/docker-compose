FROM maven:3.9-eclipse-temurin-17-alpine as build
WORKDIR /workspace/app


COPY pom.xml .
COPY src src

RUN ./mvnw install -DskipTests
RUN mkdir -p target/dependency && jar -xf ../*.jar

FROM maven:3.9-eclipse-temurin-17-alpine
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG DEPENDENCY=/workspace/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.salesianos.triana.VaxConnectApi.VaxConnectApiApplication"]


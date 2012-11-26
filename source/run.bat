rd /s/q "D:\Work\liferay-portal-6.2.0\tomcat-7.0.25\webapps\ecommerce-web"
cd ecommerce
call mvn -T 1C clean install -DskipTests
cd ..
copy ecommerce-web\target\ecommerce-web-6.1.0.war "D:\Work\liferay-portal-6.2.0\deploy"
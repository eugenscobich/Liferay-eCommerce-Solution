cd ecommerce-service
call mvn clean install
cd ..\extension\ecommerce-extension-liferay
call mvn clean install
cd ..\ecommerce-extension-test
call mvn clean install
cd ..\..\ecommerce
call mvn clean install
cd ..

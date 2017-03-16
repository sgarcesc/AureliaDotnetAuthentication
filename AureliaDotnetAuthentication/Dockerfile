# base image for ASP.NET Core
FROM microsoft/aspnetcore:1.1

# install nodejs for aurelia, webpack middleware
RUN apt-get update  
RUN apt-get -f install  
RUN apt-get install -y wget  
RUN wget -qO- https://deb.nodesource.com/setup_7.x | bash -  
RUN apt-get install -y build-essential nodejs

# set the working directory
ARG source
WORKDIR /app

# automatically exposes PORT 80
EXPOSE 80

# set the environment to Development
ENV ASPNETCORE_ENVIRONMENT Development

# copy the published folder created using
# dotnet publish -o published -c Release
COPY ${source:-obj/Docker/publish} .

# set the entrypoint of the application
ENTRYPOINT ["dotnet", "AureliaDotnetAuthentication.dll"]
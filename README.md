# React NextJS Full Calendar Scheduler UI Test


## Getting Started

Install dependencies
```sh
yarn
```

##
## Running the application

### Development
```sh
npm run dev 
```


Open application in browser http://localhost:3000



##
### Production build and deploy

```sh
npm run build

and

npm run start
```


##


### Docker deployment


##### Running nextjs app with docker and open http://localhost:3000 in your browser.
```sh

docker build . -t react-ts-calendar-scheduler-test.v1

# and 

docker run -it react-ts-calendar-scheduler-test.v1

# or 

docker run -p 3000:3000 react-ts-calendar-scheduler-test


# to stop the image running
docker stop <container_id>
 
```

##### Run docker compose and open http://localhost:3000 in your browser.

```sh
docker-compose up
```


##

# Project

### Stack:
- Fullcalendar React Library
- NextJS
- Responsive CSS Modules
- React
- Typescript
- Node
- Docker

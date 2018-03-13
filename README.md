# app-creator

### 3d.io app creator for aframe

* `master` branch gets automatically deployed to `https://appcreator-testing.3d.io/`
* `production` branch is deployed to `https://appcreator.3d.io`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deployment

### Production deployment
To deploy to [appcreator.3d.io](https://appcreator.3d.io), run the following:

```bash
export NODE_ENV=production
npm run deploy-production
```

### Testing deployment
To deploy to [appcreator-testing.3d.io](http://appcreator-testing.3d.io), run the following:

```bash
export NODE_ENV=testing
npm run deploy-testing
```

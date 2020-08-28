# vuejs-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Vuejs
Udemyで初めてのVuejs（学習記録用)

・v-forを使用するときは、必ずkey属性をつける
なぜなら予期しないバグが発生してしまう可能性があるから

例 <div v-for="fruit in fruites" :key="fruit”>

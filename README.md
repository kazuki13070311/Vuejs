# Vuejs
Udemyで初めてのVuejs（学習記録用)

・v-forを使用するときは、必ずkey属性をつける
なぜなら予期しないバグが発生してしまう可能性があるから

例 <div v-for="fruit in fruites" :key="fruit”>

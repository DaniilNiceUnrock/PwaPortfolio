<template>
<div>
  <h1 class="categories_h1"> Редактировать содержимое: </h1>
   <div class="categories" >
        <!--<div class="category">
        <div class="category_item">
            <h1 class="category_item__h1">
            <a href="/skills"> Название категории</a>
            </h1>
        </div>
        </div> --> 
  
        <div class="category_item" v-for="category in categories" :key="category.id">
            <a :href="category.href" class="category_item__a"> 
                <h1 class="category_item__h1">{{category.title}}</h1>
            </a>
        </div>
     
    </div>
</div>
   
</template>


<script>

    export default {
 data() {
   return {
     categories: [
       {id: 1, title: 'Навыки', href: '/admin/skills'},
       {id: 2, title: 'Работы', href: '/admin/works'},
       {id: 3, title: 'Отзывы', href: '/admin/reviews'},
       {id: 4, title: 'Заявки', href: '/admin/request'}
     ]
   };
 },
  name: 'AdminHomeBody',
}
</script>

<style scoped lang="scss" src="@/admin/components/AdminHome/_adminbodyhome.scss">
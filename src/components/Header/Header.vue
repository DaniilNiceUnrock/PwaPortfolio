<template>

    <div class="header" >
		<p class="header_h3"> {{this.$route.meta.title}} </p>
		<div class="menu">
			<div class="menu_about"></div>
			<div class="menu_hrefs">
				<a class="href" href="#about">
					<span>About me</span> 
				</a>
				<a class="href" href="#MySkills">
					<span>Skills</span> 
				</a>
				<a  class="href" href="#MyWorks">
					<span>Works  </span> 
				</a>
				<a class="href" href="#reviews">
					<span>Reviews</span> 
				</a>
				<a id="GitHub" href="https://github.com/DaniilNiceUnrock" class="href" target="_blank"> 
					<span>GitHub</span>  
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  @import "./_header.scss";
</style>
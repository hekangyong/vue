<template>
    <div class="event">
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Phone</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" v-model="phone">
                    <small id="emailHelp" class="form-text text-muted">{{ phone }}
                    </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                           v-model="password">
                    <small id="passwordHelp" class="form-text text-muted">{{ password }}
                    </small>
                </div>
                <button type="button" class="btn btn-primary" @click="login">登陆</button>
                <button type="button" class="btn btn-primary" @click="logout">登出</button>
            </form>
            <div v-if="defauser !== null">
                {{ defauser.nickname }}
                <img :src=defauser.avatarUrl alt="" width="20%">
            </div>

            <input type="text" v-model="search">
            <button @click="searchthis">aaaa</button>
            <div  v-if="searchInfo">
                <div v-for="(tab, indexKey) in searchInfo" :key="indexKey">
                    {{ tab.id }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Event",
		data() {
			return {
				phone: "13926523359",
				password: "HKY2085628921",
				userInfo: null,
				defauser: null,
				search: "fade",
				searchInfo: {}
			}
		},
		created() {
			this.$http.get("http://localhost:4000/login/status")
				.then(res => {
					this.defauser = res.data.profile
					console.log(this.defauser)
				})
				.catch(err => {
					console.log(err)
				})
		},
		methods: {
			login: function () {
				this.$http.get("http://localhost:4000/login/cellphone?phone=" + this.phone + "&password=" + this.password)
					.then(response => {
						this.userInfo = response.data
						console.log(this.userInfo)
					})
					.catch(error => {
						console.log(error);
					})
			},
			logout: function () {
				this.$http.get("http://localhost:4000/logout")
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err.data)
					})
			},
			searchthis: function () {
				let type = 1;
				this.$http.get("http://localhost:4000/search?keywords=" + this.search + "&type=" + type)
					.then(response => {
						this.searchInfo = response.data.result
						console.log(this.searchInfo)
					})
					.catch(error => {
						console.log(error);
					})
			}
		}
	}
</script>


<style lang="scss" scoped>
    .event {
        margin-top: 100px
    }
</style>


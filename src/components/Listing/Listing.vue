<template>
    <div class="listing">
        <h1>Bitcoin Price Index</h1>

        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">Loading...</div>

            <div
                    v-else
                    v-for="currency in info"
                    class="currency"
            >
                {{ currency.description }}:
                <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
                    <br>
                    {{ currency }}
      </span>
            </div>

        </section>
    </div>
</template>

<style lang="scss" scoped>
    .listing {
        margin-top: 100px;
    }
</style>

<script>
	export default {
		name: "Listing",
		data () {
			return {
				info: null,
				loading: true,
				errored: false
			}
		},
		filters: {
			currencydecimal (value) {
				return value.toFixed(2)
			}
		},
		mounted () {
			this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
				.then(response => {
					this.info = response.data.bpi
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => this.loading = false)
		}
	}
</script>

<template>
    <div class="index">
        <Carousel/>
        <div class="about-us">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="about-us-content">
                            <div class="about-us-title">
                                <h4>about something</h4>
                                <h2>
                                    It's Out
                                    <span>Honour,</span>To
                                    <br>Be
                                    <span>With</span> You
                                </h2>
                            </div>
                            <p>There are many variations of passages of electronics Services, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. by injected humour, or randomised words which don't look
                                even</p>
                            <p>There are many variations of passages of electronics repair, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words duskam azer
                                which don't look</p>
                            <a href="javascript:void(0)" class="abous-us-more">discover more</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-us-img">
                            <img src="../../assets/images/about-02.png" alt>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="provide">
            <div class="container">
                <div class="provide-title text-center">
                    <h4>ELECTRONICS SERVICES</h4>
                    <h2>
                        What We
                        <span>Provide</span>
                    </h2>
                    <p>There are many variations of passages of Lorem electronics repair, but the majority have suffered
                        alteration in azer duskam</p>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-6 col-12" v-for="item in items" :key="item.id">
                        <div class="provide-card mt-30">
                            <div class="provide-img">
                                <a href="#">
                                    <!-- src="../../assets/images/service-01.png" -->
                                    <img :src="item.img" alt>
                                </a>
                            </div>
                            <h5>
                                <a href="#">{{ item.title }}</a>
                            </h5>
                            <div class="provide-content">
                                <p>{{ item.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-area">
            <div class="container zindex">
                <div class="row align-items-center">
                    <!-- <p style="color: #fff">sdf</p> -->
                    <div class="col-md-7">
                        <div class="video-box-content">
                            <div class="videp-content-title">
                                <h2>Why <span>Choose</span> Us?</h2>
                            </div>
                            <div class="video-box-sub" v-for="chooses in choose" :key="chooses.index">
                                <div class="video-choose">
                                    <img :src=chooses.img alt="">
                                </div>
                                <div class="video-choose-content">
                                    <h3>{{ chooses.title }}</h3>
                                    <p>
                                        {{ chooses.content }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="video-area-content position-relative text-right">
                            <div class="video-btn">
                                <a href="#">
                                    <img src="../../assets/images/video.png" alt="asd" class="img-fluid">
                                </a>
                                <div class="video-animation">
                                    <div class="animation animation-1"></div>
                                    <div class="animation animation-2"></div>
                                    <div class="animation animation-3"></div>
                                    <div class="animation animation-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="show">asd</button>
    </div>
</template>

<script>
	import Carousel from "@/components/Carousel/Carousel";

	export default {
		name: "Index",
		data() {
			return {
				items: [
					{
						img: require("../../assets/images/service-01.png"),
						title: "Laptop Repair",
						content:
							"There are many variations of Laptop repair Lorem electronics repair, but the majority have suffered alteration in"
					},
					{
						img: require("../../assets/images/service-02.png"),
						title: "Smartphone Repair",
						content:
							"There are many variations smartphone Repair of Lorem electronics repair, but the majority have suffered alteration in"
					},
					{
						img: require("../../assets/images/service-03.png"),
						title: "Camera Repair",
						content:
							"There are many variations camera repair of Lorem electronics repair, but the majority have suffered alteration in"
					},
					{
						img: require("../../assets/images/service-04.png"),
						title: "Others Repair",
						content:
							"There are many variations others repair of Lorem electronics repair, but the majority have suffered alteration in"
					},
					{
						img: require("../../assets/images/service-05.png"),
						title: "Iphone Repair",
						content:
							"There are many variations phone Repair of Lorem electronics repair, but the majority have suffered alteration in"
					},
					{
						img: require("../../assets/images/service-06.png"),
						title: "Desktop Repair",
						content:
							"There are many variations desktop repair of Lorem electronics repair, but the majority have suffered alteration in"
					}
				],
                choose:[
					{
						img: require("../../assets/images/kunnan-.svg"),
						title: "Laptop Repair",
						content:
							"There are many variations of Laptop repair Lorem electronics repair, but the majority have suffered alteration in"
					},
					{
						img: require("../../assets/images/anchor.svg"),
						title: "Low Price",
						content:
							"There are many variations of Laptop repair Lorem electronics repair, but the majority have suffered alteration in"
					},
					{
						img: require("../../assets/images/clock.svg"),
						title: "Quick Service",
						content:
							"There are many variations of Laptop repair Lorem electronics repair, but the majority have suffered alteration in"
					},
                ],
			};
		},
		components: {
			Carousel
		},
		methods: {
			show: function(){
				console.log(this.items)
            }
        }
	};
</script>

<style lang="scss" scoped>
    @import "./index.scss";
    @import "../../assets/css/material-icons.css";
</style>



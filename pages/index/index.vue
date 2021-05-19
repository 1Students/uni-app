<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="bofang">点击播报</button>
		<button @click="baidu">点击</button>
	</view>
</template>

<script>
	  import {iosPlay,androidPlay,audioPlay} from '../../js_sdk/wzc-speechSynthesis/speechSynthesis.js'
	  import Voice from '../../js_sdk/QuShe-baiduYY/QS-baiduyy/QS-baiduyy.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			bofang:function(){
				  androidPlay('需要播报的文字') 
			},
			baidu:function(){
				console.log(112)
				Voice('需要播报的文字');
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

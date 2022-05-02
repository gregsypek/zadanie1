import { createStore } from "vuex";

export default createStore({
	state: {
		api_key: "a9e58a19d0374ddd9a5108b9b5cef1e0",
		url_base: "http://api.openweathermap.org/data/2.5/",
		newQuery: "",

		weather: {},
		currentWeather: null,
		// if false -  hide result from history list (if someone want search new one and old is printed on the screen - prevent double results)
		showNew: false,
		date: null,
		cities: [],
	},
	getters: {
		dateBuilder: (state) => {
			let d = new Date();
			state.date = d;
			let months = [
				"Styczeń",
				"Luty",
				"Marzec",
				"Kwiecień",
				"Maj",
				"Czerwiec",
				"Lipiec",
				"Sierpień",
				"Wrzesień",
				"Październik",
				"Listopad",
				"Grudzień",
			];
			let days = [
				"Niedziela",
				"Poniedziałek",
				"Wtorek",
				"Środa",
				"Czwartek",
				"Piątek",
				"Sobota",
			];
			let day = days[d.getDay()];
			let date = d.getDate();
			let month = months[d.getMonth()];
			let year = d.getFullYear();

			let time = d.toLocaleTimeString("pl-PL");
			return `${day} ${date} ${month} ${year} 
			${time}`;
		},
	},
	mutations: {
		addToCities(state, payload) {
			state.cities.push(payload);
		},
		addNewQuery(state, payload) {
			state.newQuery = payload;
		},
	},
	actions: {
		async fetchWeather(context) {
			// console.log(context);
			// Example on how to make an API call using  API key is on Readme.md
			// context.commit("addNewQuery");
			console.log("here", context.state);
			await fetch(
				`${context.state.url_base}weather?q=${context.state.newQuery}&units=metric&APPID=${context.state.api_key}`
			)
				.then((res) => res.json())
				.then((json) => {
					console.log(typeof json, json);
					context.commit("addToCities", json);
					context.currentWeather = json;
				});
		},
	},
});

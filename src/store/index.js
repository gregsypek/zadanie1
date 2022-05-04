import { createStore } from "vuex";

export default createStore({
	state: {
		api_key: "a9e58a19d0374ddd9a5108b9b5cef1e0",
		url_base: "http://api.openweathermap.org/data/2.5/",
		newQuery: "",
		weather: {},
		date: null,
		cities: [],
		isError: false,
		errorMessage: "",
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
		//state is automaticcally added by vuex
		addToCities(state, payload) {
			state.cities.push(payload);
		},
		addNewQuery(state, payload) {
			state.newQuery = payload;
		},
		toggleIsError(state, payload) {
			state.isError = payload;
		},

		addNewError(state, payload) {
			state.isError = true;
			state.errorMessage = payload;
		},
	},
	//actions allows us to call specific mutation with asynchronous code
	//context contains everything that is basically inside our store and has special method called commit
	actions: {
		async fetchWeather(context) {
			try {
				// Example on how to make an API call using  API key is on Readme.md
				// context.commit("addNewQuery");
				// console.log("what context includes", context.state);
				const res = await fetch(
					`${context.state.url_base}weather?q=${context.state.newQuery}&units=metric&APPID=${context.state.api_key}`
				);
				if (!res.ok)
					throw new Error("There is no weather for your city. Try again!");
				const data = await res.json();
				console.log("data", data);
				context.commit("addToCities", data);
			} catch (err) {
				console.error(err);
				context.commit("addNewError", err);
			}
		},
		hideError(context) {
			context.commit("toggleIsError", false);
		},
	},
});

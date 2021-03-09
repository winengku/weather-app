const weather = {
    namespaced: true,
    state: {
        curWeather: null
    },
    getters: {

    },
    actions: {
        fetchWeather({ commit }, params) {
            return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + params + '&appid=9281ce9fa6072cbd884ecde4ebd1cb3c&units=metric')
                .then(response => response.json())
                .then(data => commit("SET_WEATHER", data))
        }
    },
    mutations: {
        SET_WEATHER(state, data) {
            state.curWeather = data
        }
    }
}

export default weather;
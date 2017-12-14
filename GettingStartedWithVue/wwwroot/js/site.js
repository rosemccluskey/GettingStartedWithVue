
var growler = new Vue({
    el: '#growler',
    data: {
        appName: 'Growler',
        query: '',
        searchIndexes: [],   // for checkbox lists or <select multiple>, items are added/removed to array based on checkbox selections  (e.g. <input type="checkbox" value="beers" v-model="searchIndexes"> <input type="checkbox" value="breweries" v-model="searchIndexes">)
        searchIndex: 'beers',    // for radio buttons or <select>, bind to singluar/non array property (e.g. <input type="radio" value="beers" v-model="searchIndex">)
        validation: ''
    },
    methods: {
        executeSearch: function () {
            if (this.query) {
                $("#form").submit();
            } else {
                this.validation = "Please enter a query.";
            }
        },
        clearValidation: function() {
            this.validation = '';
        }
    }
});
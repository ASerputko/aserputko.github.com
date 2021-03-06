$(document).ready(function () {
    var router = Backbone.Router.extend({
		
		initialize : function (options) {
			this._containerId = 'home';
        },

        routes: {
            "": "presentation",
            "presentation": "presentation",
            "presentation/:page": "presentation",
            "presentation/:page/:id": "presentation"
        },

        presentation : function (page, id) {
            var options = {
				containerId : this._containerId,
                page        : page,
                id          : id
            };
            var presantation = new offLineWebAppPresantationController(options);
        }
    });
    
    var router = new router();
    Backbone.history.start()
});

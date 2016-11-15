/* path_to_file/filename */

class StateHelper {
    constructor() {}
    getParams(data) {
        data = data.split('/').filter(route => {
            if (route) {
                return route;
            }
        });

        const StateObject = {};

    }
}

StateHelper.$inject = [];

export default StateHelper;

import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '3335114318fc44ee96865a73d93b16f2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

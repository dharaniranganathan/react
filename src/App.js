import {Provider} from 'react-redux';
import Counter from './redux/counter';
import store from './redux/store';

export default function App(){
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}
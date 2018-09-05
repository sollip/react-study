import * as actions from '../redux/actions';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#f76707',
        '#37b24d',
    ];
    const random = Math.floor(Math.random() * 7);
    return colors[random];
}
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
}); // action의 state를 props로 맵핑시켜준다.

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter);
export default CounterContainer;

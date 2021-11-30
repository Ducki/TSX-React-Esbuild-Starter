import Foo from './Foo'

interface Global {
    ReactDOM: typeof import("react-dom")
}
interface Window extends Global { }


const domContainer = document.querySelector('#app');

ReactDOM.render(<Foo />, domContainer);
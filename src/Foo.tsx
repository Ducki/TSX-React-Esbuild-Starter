export default function Foo() {
    const [foo, setFoo] = React.useState("Hi!")
    return (
        <p className="foo">{ foo }</p>
    )
}
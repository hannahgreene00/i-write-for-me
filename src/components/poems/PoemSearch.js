export const PoemSearch = ({ setterFunction }) => {
    return (
        <div>
        <input
        onChange={
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        } type="text" placeholder="Search for poems here" />
        </div>
    )
}
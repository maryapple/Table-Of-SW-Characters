export default (items) => {
    const heights = items.map(function (item) {
        return (item.height)
    })

    return Math.max(...heights)
}

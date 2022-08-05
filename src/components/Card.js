function Card(item) {
  const itemClass = item.item.stat ? " active " + item.item.stat : ""

  return (
    <div className={"card" + itemClass} onClick={() => item.handleClick(item.id)}>
      <img src={item.item.img} alt="" />
    </div>
  )
}

export default Card;
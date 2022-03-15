const LeftSubtitle = props => {
    return (
        <div className={`box  + ${props.className}`}>
          <h2 class={`subtitle + ${props.am}`}>{props.subtitle}</h2>
        </div>
    )
}

export default LeftSubtitle;
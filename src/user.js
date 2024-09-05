export const User =(props) => {
    return( <div className='task'>
      <h5>{props.name}</h5>
      {/* <span>{props.num}</span> */}
      <span onClick={()=>props.remove(props.num)}>X</span>
      </div>)
  }



function Button({children,clickHandle}) {

  
  return (
    <button className="p-2 cursor-pointer " onClick={clickHandle}>{children}</button>
  )
}

export default Button

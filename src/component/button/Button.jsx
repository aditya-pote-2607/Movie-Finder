


function Button({children,clickHandle,css}) {

  
  return (
    <button className={`p-2 cursor-pointer ${css}` } onClick={clickHandle}>{children}</button>
  )
}

export default Button

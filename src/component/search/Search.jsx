

function Search({placeholder,onSearch}) {
  return (
    <input 
    className="p-1 border border-white white rounded-4xl min-w-[35vw]"
    type="text"
    placeholder={placeholder}
    onKeyDown={(e)=>e.key=="Enter"?onSearch(e):null}
     />
  )
}

export default Search

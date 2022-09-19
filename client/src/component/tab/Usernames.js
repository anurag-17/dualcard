import React from 'react'

export const Usernames = (props) => {

const handleuserclick = (event)=>{
  props.onuserclick(event.target.value,event.target.name)
}

  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
    {props.searchfilter.map((items,index) => {
      return (
        <li key={items._id} className="nav-item" role="presentation">
          <button
            value={items.username}
            onClick={handleuserclick}
            name={items._id}
            className="nav-link active tab-btn"
            id="home-tab"
            type="button"
          >
            {" "}
            <img
              src={require(`../../images/tabicon-${
                index + 1
              }.png`)}
              alt="img"
            />
            {items.username}
          </button>
        </li>
      );
    })}
  </ul>
  )
}

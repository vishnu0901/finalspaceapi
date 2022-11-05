import React from 'react'
import './PostItem.css'

const h1Styled = {
    color: 'darkmagenta',
    backgroundColor: 'lightgreen',
    padding: '5px'
}



const PostItem = ({ post }) => {
    return (
        <div className='container'>
            {/* <h1 style={h1Styled}>ID: {post.id}</h1> */}
            <img src={post.img_url} width="100px" height="100px"></img>
            <h3 style={{ color: 'darkblue', backgroundColor: 'lightgray' }}>
                Species: {post.species}
            </h3>
            <h3> Origin : {post.origin}</h3>
            <h4> Ability : {post.abilities[0]}</h4>
        
        </div>
    )
}

export default PostItem
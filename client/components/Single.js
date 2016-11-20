import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = React.createClass({
  render() {
    // index of post
    const { postId } = this.props.params
    const index = this.props.posts.findIndex((post) => post.code === postId)
    // get post
    const post = this.props.posts[index]
    const postComments = this.props.comments[postId] || []
    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
})

export default Single
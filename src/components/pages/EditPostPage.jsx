import React from 'react'
import { useParams } from 'react-router-dom'
import EditPostForm from '../Posts/EditPostForm'

function EditPostPage() {
    const {id} = useParams()
  return (
    <EditPostForm id={id} />
  )
}

export default EditPostPage
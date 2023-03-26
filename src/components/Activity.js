import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Activity = ({ activity }) => {
  return (
    <Card style={{ width: '70rem' }} className='my-3 p-1 rounded'>
        {/* <Link to={`/activity/${activity._id}`}> */}
            
        {/* </Link> */}
      <Card.Body>
        {/* <Link to={`/activity/${activity._id}`}> */}
          <Card.Title as='div'>
            <strong>{activity.title}</strong>
          </Card.Title>
        {/* </Link> */}
        <Card.Text as='div'>
          <div className='my-1'>{activity.description}</div>
        </Card.Text>
      </Card.Body>
      <Card.Img src={activity.image} variant='top' />
    </Card>
  )
}

export default Activity

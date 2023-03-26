import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Activity from '../components/Activity'
import activities from '../activities'


const EventScreen = () => {
  return (
    <>
      <h1>Latest Events</h1>
      <Row>
        {activities.map(activity => (
            <Col key={activity._id} sm={12} md={6} lg={4} xl={3}>
                <Activity activity={activity} />
            </Col>
        ))}
      </Row>
    </>
  )
}

export default EventScreen

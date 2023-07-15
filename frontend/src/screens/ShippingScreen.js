import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from "../components/FormContainer"
import { saveShippingAddress } from "../actions/cartActions"
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from "../components/CheckoutSteps"

function ShippingScreen() {

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const [address, setAddress] = useState(shippingAddress.address)
  const [suburb, setSuburb] = useState(shippingAddress.suburb)
  const [city, setCity] = useState(shippingAddress.city)
  const [postcode, setPostcode] = useState(shippingAddress.postcode)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address, suburb, city, postcode}))
    navigate("/payment")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form
        onSubmit={submitHandler}
      >
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder="Enter Address"
            value={address ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='suburb'>
          <Form.Label>Suburb</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder="Enter Suburb"
            value={suburb ? suburb : ''}
            onChange={(e) => setSuburb(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder="Enter City"
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='postcode'>
          <Form.Label>Post Code</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder="Enter Post Code"
            value={postcode ? postcode : ''}
            onChange={(e) => setPostcode(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>Continue</Button>

      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.css';

function ContactForm() {
    return (
            <Form>
                <Form.Group className="form-group">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3"/>
                </Form.Group>
                <Button type='submit'>
                    Submit
                </Button>
            </Form>
    )
}

export default ContactForm;

// Email validation
// Message cannot be empty
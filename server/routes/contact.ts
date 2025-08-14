import express from 'express';
import { Contact } from '../db/models/contact.js';
import { validateContactForm } from '../middleware/validation';
import { authenticateToken } from '../middleware/auth';
import { sendContactFormEmail } from '../utils/email';

const router = express.Router();

// GET /api/contact - Get all inquiries (protected route)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: inquiries
    });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch inquiries',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// POST /api/contact - Handle contact form submissions
router.post('/', validateContactForm, async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);
    
    const { name, email, phone, service, message, preferredDate, subscribe } = req.body;
    
    const contact = new Contact({
      name,
      email,
      phone,
      service,
      message,
      preferred_date: preferredDate ? new Date(preferredDate) : null,
      subscribe
    });

    console.log('Saving contact:', contact);
    
    // Save the contact to the database
    await contact.save();
    
    console.log('Contact saved successfully');
    
    // Send email notification
    const emailSent = await sendContactFormEmail({
      name,
      email,
      phone,
      service,
      preferred_date: preferredDate,
      message
    });

    if (!emailSent) {
      console.warn('Failed to send email notification, but contact was saved to database');
    }
    
    res.status(201).json({
      success: true,
      message: "Thank you for your inquiry! We will get back to you soon.",
      data: contact,
      emailSent
    });
  } catch (error: unknown) {
    console.error('Detailed error in contact form submission:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      body: req.body
    });
    res.status(500).json({
      success: false,
      error: 'Failed to process contact form',
      message: error instanceof Error ? error.message : 'An unexpected error occurred'
    });
  }
});

export default router;

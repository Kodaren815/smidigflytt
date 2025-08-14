# Smidigflytt Admin System

## Overview
The admin system allows you to view and manage contact messages and quote requests submitted through the website.

## Features
- **Contact Form Submissions**: All messages from the `/kontakt` page
- **Quote Requests**: All requests from the `/offert` page (price calculator)
- **Damage Reports**: All damage claims from the `/reklamation` page
- **Real-time Data**: View submissions as they come in
- **Password Protected**: Secure access with hardcoded password

## Access
- **URL**: `http://localhost:3000/admin`
- **Password**: `smidigflytt2024admin`

## Data Storage
- Contact messages are stored in: `data/contacts.json`
- Quote requests are stored in: `data/quotes.json`
- Damage reports are stored in: `data/damage-reports.json`
- Data files are automatically created when first submission is received
- Data directory is excluded from git (see `.gitignore`)

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
- Accepts: `name`, `email`, `phone`, `subject`, `message`
- Required: `name`, `email`, `message`

### Quote Requests
- **POST** `/api/quotes` - Submit quote request
- Accepts: `serviceType`, `date`, `address`, `housingType`, `squareMeters`, `floor`, `hasElevator`, `hasBalcony`, `name`, `phone`, `email`
- Required: `serviceType`, `name`, `email`, `phone`

### Damage Reports
- **POST** `/api/damage-reports` - Submit damage report
- Accepts: `fullName`, `orderNumber`, `personalNumber`, `email`, `phone`, `damageDateTime`, `damageLocation`, `damageDescription`, `brand`, `acquisitionValue`, `manufacturedYear`, `insuranceCompany`, `purchaseDate`, `claimAmount`, `witnessInfo`, `files`, `confirmed`
- Required: `fullName`, `personalNumber`, `email`, `phone`, `damageDateTime`, `damageLocation`, `damageDescription`, `confirmed`
- Supports file uploads (images, PDFs, documents up to 10MB per file)

### Admin Data
- **GET** `/api/admin?password=smidigflytt2024admin` - Fetch all submissions
- Returns combined list of contacts, quotes, and damage reports with statistics

## Security
- Admin access requires hardcoded password
- Password is validated server-side
- Data files are stored locally on server
- No database required

## Usage
1. Start development server: `npm run dev`
2. Navigate to `http://localhost:3000/admin`
3. Enter password: `smidigflytt2024admin`
4. View and manage all submissions

## Form Integration
Both contact form (`/kontakt`) and price calculator (`/offert`) now submit data to the respective API endpoints and provide user feedback on successful submission.

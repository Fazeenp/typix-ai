# Typix – AI-Powered Text-to-Image Generator

**Typix** is a full-stack SaaS application that transforms text prompts into AI-generated images using the ClipDrop API. It features real-time payments, secure authentication, and persistent user credit tracking.

## Key Features

- Text-to-image generation via ClipDrop API
- Real-time credit-based payments using Razorpay
- JWT-based authentication and session management
- MongoDB-backed user and credit data storage
- React Context API for global state management
- Responsive, modern UI with Tailwind CSS

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Payments:** Razorpay API
- **Image Generation:** ClipDrop API
- **Auth:** JSON Web Tokens (JWT)

## Installation

```bash
git clone https://github.com/your-username/typix.git
cd typix

# Backend setup
cd server
npm install

# Frontend setup
cd ../client
npm install
````

## Environment Configuration

Add a `.env` file to both `client` and `server` directories with:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## How It Works

1. Users sign up, authenticate, and purchase credits.
2. Each image generation consumes credits.
3. The ClipDrop API returns AI-generated images from the prompt.
4. Users can view/download generated images from their dashboard.


## Author

Built by \[Fazeen Patel] – [LinkedIn](https://www.linkedin.com/in/fazeen-patel/) | [GitHub](https://github.com/Fazeenp)

Problem Statement : ReWear – Community Clothing Exchange


Team Member Names & Mail ID:
Name: PRANTIC DEV NATH  ;  Mail ID: prantic_ug_23@mech.nits.ac.in
Name: SHOUVIK PAUL	    ;  Mail ID: shouvik_ug_23@ece.nits.ac.in
Name: SUBHAJYOTI DEY	;  Mail ID: subhajyoti_ug_23@cse.nits.ac.in

## Our Website Name is ExChain

# 👕 ExChain – Smart Community Clothing Exchange Platform

**ExChain** is a sustainable, web-based platform that empowers users to exchange unused or gently-used clothing through **direct swaps** or a **point-based redemption system**. Designed to encourage conscious consumption and reduce textile waste, ExChain fosters a vibrant, eco-friendly community.

---

## 🌟 Key Features

### 👤 User Functions
- **User Registration & Login** (Secure auth via Email/Password)
- **User Dashboard**
  - View profile, points, and listed items
  - Track swap history and ongoing exchanges
- **List Clothing Items**
  - Upload images, describe clothing (size, category, condition, tags)
- **Explore Listings**
  - Browse and filter based on size, type, condition, or style
- **Two Exchange Modes**
  - 🔁 **Direct Swap**: Offer your item in return for another
  - 💰 **Point Redemption**: Earn & use ExChain Points to claim items
- **Ratings & Feedback**
  - Give/receive reviews after swaps for trust-building

### 🧑‍💼 Admin Functions
- Approve or reject item listings
- Monitor spam or flagged items
- View swap statistics, user activity, and point transactions
- Manage announcements and platform rules

---

## 🔄 Workflow Diagram

```mermaid
graph TD
A[Landing Page] --> B[Sign Up / Log In]
B --> C[Dashboard]
C --> D[List New Item]
C --> E[Browse Items]
E --> F[Swap Request or Redeem via Points]
F --> G[Delivery & Confirmation]
G --> H[Leave Feedback & Earn Points]






This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

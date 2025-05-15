# 🛍️ Frontend Developer Technical Assessment

## 🌟 Overview

This project is a modern, high-performance, responsive product page for an e-commerce platform. It demonstrates core frontend development skills including interactive UI design, performance optimization, accessibility, custom state management, and testing with TypeScript and Next.js 15+ (App Router).

---

## 📦 Features

### ✅ Core Features

* **Product Gallery** with zoom functionality
* **Color/Size Variant Selector** with dynamic state updates
* **Cart System** using custom React Context + useReducer
* **Expandable Product Description** sections
* **Responsive Design** across devices (mobile, tablet, desktop)

### 🌟 Advanced Feature Implemented

* **Custom State Management**: Built using React Context API and `useReducer` for clean and scalable state handling across the app

---

## 🛠️ Tech Stack

* **Framework**: Next.js 15+ (App Router)
* **Language**: TypeScript
* **Testing**: Jest, React Testing Library
* **State Management**: React Context + useReducer
* **Accessibility**: WCAG 2.1 compliant
* **Performance**: Optimized for fast load times and smooth interactions

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KhalidHassan218/nextjs_ulearna.git
cd nextjs15-test-ulearna
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Run the unit tests

```bash
npm run test
```

---

## 🧪 Unit Tests

This project includes unit tests for critical components:

* `ProductGallery.test.tsx`: Verifies zoom and image gallery interactions.
* `CartContext.test.ts`: Tests the custom context and reducer for cart state management.
* `api.test.ts`: Mocks and validates API interactions.
* `CartItem.test.tsx`: Validates behavior and rendering of individual cart items.

> Coverage includes key use cases, edge case handling, and component output verification.

---

## 📂 Project Structure

```bash
.
├── app/
│   └── page.tsx
├── components/
│   ├── ProductGallery.tsx
│   ├── CartItem.tsx
│   └── ...
├── context/
│   └── CartContext.tsx
├── lib/
│   └── api.ts
├── tests/   * included tests with its files for easy access 
│   ├── ProductGallery.test.tsx
│   ├── CartContext.test.ts
│   ├── api.test.ts
│   └── CartItem.test.tsx
├── public/
├── styles/
├── README.md
└── ...
```

---

## ⚙️ Key Technical Decisions

* **Custom State Management**
* **Typed Context API** ensures safer state updates and developer confidence.
* **App Router (Next.js 15+)** for routing and better layout control.
* **Modular Architecture** for component reusability and separation of concerns.
* **Unit Testing** covers interaction, business logic, and state transitions.

---

## 🌈 Bonus Features

* [x] Dark/Light Mode toggle
* [ ] Keyboard Navigation for interactive components
* [x] Global Error Boundary with fallback UI
* [ ] Analytics integration *(optional placeholder)*
* [ ] Error Logging system via console and toast fallback

---

## 📊 Performance

* Lighthouse score: **>90**
* optimized images
* Minimized layout shifts
* Debounced interactions and smooth UX

---

## 🧐 Author Notes

* Focused on edge cases, accessibility, and mobile-first design.
* All critical flows are unit tested.
* Easily extensible for future features like reviews, authentication, or checkout.

---

## 📝 License

This project is part of a technical assessment and is intended for demonstration purposes only.

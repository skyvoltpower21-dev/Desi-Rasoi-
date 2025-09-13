import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">
      <header className="bg-orange-500 text-white p-4 text-center text-2xl font-bold shadow">
        Desi Rasoi
      </header>

      <section className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-xl shadow">Step 1: Choose your meal</div>
          <div className="p-4 bg-white rounded-xl shadow">Step 2: Place your order</div>
          <div className="p-4 bg-white rounded-xl shadow">Step 3: Get it delivered fast</div>
        </div>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Delivery Partners</h2>
        <div className="flex justify-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" alt="Zomato" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Dunzo_logo.png" alt="Dunzo" className="h-12"/>
        </div>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Order Now</h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <textarea placeholder="Delivery Address" className="w-full p-2 border rounded" required></textarea>
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Place Order
          </button>
        </form>
      </section>

      <footer className="bg-orange-500 text-white text-center p-4 mt-6">
        © 2025 Desi Rasoi. All Rights Reserved.
      </footer>
    </div>
  )
}
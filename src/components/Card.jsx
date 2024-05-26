/* eslint-disable react/no-unknown-property */

const Card = () => {
  return (
<>

<div className="mx-auto sm:p-10 md:p-16">
  <div className="bg-white rounded-lg overflow-hidden shadow-xl ring-4 ring-[#42ff1c]  ring-opacity-80 max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative">
      <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
      <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium animate-bounce">SALE</div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-medium mb-2">Product Title</h3>
      <p className="text-gray-600 text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">$19.99</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</div>

</>
)
}

export default Card
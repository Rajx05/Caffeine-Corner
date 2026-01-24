function Coffee(props) {
  return (
    <div class="rounded-3xl bg-[#FAECC1] p-3 shadow">
      <div class="flex justify-center">
        <img src="/coffee-cup.png" alt="Product" class="h-20 w-25 rounded-md" />
      </div>
      <h3 class="mt-2 text-center text-lg font-semibold">{props.name}</h3>
      <p class="text-3xl">₹{props.price}</p>
      <button class="mt-2 rounded-lg bg-[#4B2E2B] px-4 py-2 text-white hover:bg-[#38211E]">
        Add to Cart
      </button>
    </div>
  );
}

export default Coffee;

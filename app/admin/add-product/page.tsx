import AddProductForm from "./AddProductForm";

export default function AddProductPage() {
  return (
    <div>
      <h2>Add New Product</h2>
      <AddProductForm />
    </div>
  )
}

//Flyttat ut tidigare innehåll till klientkomponenten AddProductForm.tsx, för att göra denna till en ren serverkomponent. 
import AddProductForm from "../../components/add-product/AddProductForm";

export default function AddProductPage() {
  return (
    <div>
      <AddProductForm />
    </div>
  );
}
//KOMMENTAR TILL KOD, SERVERKOMPONENT SOM LADDAR FORMULÄRET:
//Har flyttat ut tidigare innehåll till den nya klientkomponenten AddProductForm.tsx. Nu är detta en ren serverkomponent som endast renderar klientkomponenten på sidan /admin/add-product.
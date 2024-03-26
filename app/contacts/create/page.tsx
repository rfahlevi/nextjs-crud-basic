import CreateForm from "@/components/create-form";

function CreateContact() {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
          <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
          <CreateForm/>
    </div>
  );
}

export default CreateContact;

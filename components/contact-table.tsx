import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { DeleteButton, EditButton } from "@/components/buttons";

async function ContactTable({query, currentPage}: {query: string, currentPage: number}) {
  const contacts = await getContacts(query, currentPage);
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact: any, index: number) => (
          <tr key={contact.id} className="bg-white border-b border-gray-100">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{contact.name}</td>
            <td className="py-3 px-6">{contact.phone}</td>
            <td className="py-3 px-6">
              {formatDate(contact.createdAt.toString())}
            </td>
            <td className="flex gap-1 py-3 justify-center">
              <EditButton id={contact.id}/>
              <DeleteButton id={contact.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;

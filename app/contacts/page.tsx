import ContactTable from "@/components/contact-table";
import Pagination from "@/components/pagination";
import ContactSearch from "@/components/contact-search";
import { CreateButton } from "@/components/buttons";
import { getContactPages } from "@/lib/data";
import TableSkeleton from "@/components/skeletons";
import { Suspense } from "react";

async function Contact({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;

  const totalPage = await getContactPages(query);

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <ContactSearch />
        <CreateButton />
      </div>
      <Suspense key={query + page} fallback={<TableSkeleton />}>
        <ContactTable query={query} currentPage={page} />
      </Suspense>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPage} />
      </div>
    </div>
  );
}

export default Contact;

import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { announcementsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Announcement = {
    id: number;
    title: string;
    class: string;
    date: string;
}

const columns = [
    {
        header: "Title", accessor: "title"
    },
    {
        header: "Class", accessor: "class", className: "hidden md:table-cell"
    },
    {
        header: "Date", accessor: "date", className: "hidden md:table-cell"
    },
    {
        header: "Actions", accessor: "action"
    },
]

const AnnouncementListPage = () => {

    const renderRow = (item: Announcement) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-starPurpleLight">
            <td className="flex items-center gap-4 p-4">{item.title}</td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teacher/${item.id}`} >
                        <button className="flex w-7 h-7 items-center justify-center rounded-full bg-starSky">
                            <Image src={"/edit.png"} alt="logo" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (<Link href={`/list/teacher/${item.id}`} >
                        <button className="flex w-7 h-7 items-center justify-center rounded-full bg-starPurple">
                            <Image src={"/delete.png"} alt="logo" width={16} height={16} />
                        </button>
                    </Link>)}
                </div>
            </td>
        </tr>
    )

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
                <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-starYellow">
                            <Image src={"/filter.png"} alt="logo" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-starYellow">
                            <Image src={"/sort.png"} alt="logo" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-starYellow">
                            <Image src={"/plus.png"} alt="logo" width={14} height={14} />
                        </button>
                    </div>
                </div>
            </div>
            {/* list */}
            <Table columns={columns} renderRow={renderRow} data={announcementsData} />
            {/* pagination */}
            <Pagination />
        </div>
    )
}

export default AnnouncementListPage
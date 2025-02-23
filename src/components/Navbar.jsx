export const Navbar=() =>{
    return (
        <nav className="flex justify-between mx-7 px-8 py-3 py items-center bg-[#2f354a] text-[#858a99]">
            <h1 className="text-3xl font-medium"><span className="text-[#00d3cd]">H</span> O U R S</h1>
            <ul className="flex gap-5 justify-between">
                <li className="border-b border-[#00d3cd]">Dashboard</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Clients</li>
                <li>Time</li>
                <li>Reports</li>
            </ul>
            <div className="flex items-center gap-3">
                <span className="bi bi-bell text-xl"></span>
                <img className="w-10 h-10 rounded-full object-fit" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="profile"/>
                <select>   
                 <option>Mario</option>
                </select>
            </div>
        </nav>
    )
}
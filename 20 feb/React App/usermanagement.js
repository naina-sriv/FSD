// Make React available globally (needed for CDN-based setup)
const { useState } = React;

// UserManagement Component
function UserManagement() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        contact: '',
        email: '',
        designation: '',
        company: '',
        address: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [searchId, setSearchId] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        if (!formData.name || !formData.email) {
            alert('Name and Email are required');
            return;
        }
        const newUser = { ...formData, id: editingId || Date.now().toString() };
        if (editingId) {
            setUsers(users.map(u => u.id === editingId ? newUser : u));
            setEditingId(null);
        } else {
            setUsers([...users, newUser]);
        }
        setFormData({ id: '', name: '', contact: '', email: '', designation: '', company: '', address: '' });
    };

    const handleEdit = (user) => {
        setFormData(user);
        setEditingId(user.id);
    };

    const handleDelete = (id) => {
        setUsers(users.filter(u => u.id !== id));
    };

    const handleSearch = () => {
        if (searchId.trim()) {
            const results = users.filter(u => u.id.includes(searchId));
            setFilteredUsers(results);
        } else {
            setFilteredUsers([]);
        }
    };

    const displayUsers = filteredUsers.length > 0 ? filteredUsers : users;

    return (
        <div className="container">
            <h1>User Management</h1>
            
            <div className="form-section">
                <h2>{editingId ? 'Update User' : 'Add User'}</h2>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleInputChange} />
                <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
                <button onClick={handleAdd}>{editingId ? 'Update' : 'Add'}</button>
            </div>

            <div className="search-section">
                <input type="text" placeholder="Search by ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
                {searchId && <button onClick={() => { setSearchId(''); setFilteredUsers([]); }}>Clear</button>}
            </div>

            <div className="table-section">
                <table>
                    <thead>
                        <tr><th>ID</th><th>Name</th><th>Contact</th><th>Email</th><th>Designation</th><th>Company</th><th>Address</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        {displayUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td><td>{user.name}</td><td>{user.contact}</td><td>{user.email}</td>
                                <td>{user.designation}</td><td>{user.company}</td><td>{user.address}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
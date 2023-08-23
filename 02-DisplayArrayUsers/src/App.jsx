import "./styles.css"

export const App = () => {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];
    
    const displayUsers = users.map((user) => (
        <li key={user.id}>{user.name}</li>
    ))
    
    return (
        <main>
            <h3>User names</h3>
            <ul>
                {displayUsers}
            </ul>
        </main>
    )
}
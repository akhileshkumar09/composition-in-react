function Header({children}){
    return (
        <header className="header">{children}</header>
    )
}

function Sidebar({children}){
    return (
        <aside className="sidebar">{children}</aside>
    )
}

function Content({children}){
    return (
        <main className="content">{children}</main>
    )
}

export {Header, Sidebar, Content}